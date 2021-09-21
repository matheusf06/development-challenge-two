import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';    

import { Link } from "react-router-dom";

import axios from 'axios';

export default function Content() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            await axios
                .get('https://nodejs-api-clinica.herokuapp.com/pacientes/')
                .then(function (response) {
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        fetchApi();
    }, []);

    function excluir(id) {
        axios
            .delete(`https://nodejs-api-clinica.herokuapp.com/pacientes/${id}`)
            .then(() => {
                location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert('Erro');
            });
    }

    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <strong>Nome</strong>
                            </TableCell>
                            <TableCell align="center">
                                <strong>CPF</strong>
                            </TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((dat) => (
                            <TableRow
                                key={dat._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{dat.nome}</TableCell>
                                <TableCell align="center">{dat.cpf}</TableCell>
                                <TableCell align="center">
                                    <Link to={`/paciente/${dat._id}`} >
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<CreateIcon />}
                                        >
                                            Editar
                                        </Button>
                                    </Link>
                                    &ensp;
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() =>
                                            excluir(dat._id)
                                        }
                                    >
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}