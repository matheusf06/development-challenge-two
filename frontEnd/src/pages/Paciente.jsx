import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { Link } from "react-router-dom";

import axios from 'axios';

export default function Paciente() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    useEffect(() => {
        async function fetchApi() {
            await axios
                .get(`https://nodejs-api-clinica.herokuapp.com/pacientes/${id}`)
                .then((res) => {
                    setData(res.data);
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchApi();
    }, []);

    function handleChangePacienteNome(event) {
        setData((prevState) => ({
            ...prevState,
            nome: event.target.value,
        }));
    }

    function handleChangePacienteCPF(event) {
        setData((prevState) => ({
            ...prevState,
            cpf: event.target.value,
        }));
    }

    function handleChangePacienteRG(event) {
        setData((prevState) => ({
            ...prevState,
            rg: event.target.value,
        }));
    }

    function handleChangePacienteRua(event) {
        setData((prevState) => ({
            ...prevState,
            endereco: {
                rua: event.target.value,
                numero: data.endereco.numero,
                cidade: data.endereco.cidade,
                estado: data.endereco.estado,
            }
        }));
    }

    function handleChangePacienteNumero(event) {
        setData((prevState) => ({
            ...prevState,
            endereco: {
                rua: data.endereco.rua,
                numero: event.target.value,
                cidade: data.endereco.cidade,
                estado: data.endereco.estado,
            }
        }));
    }

    function handleChangePacienteCidade(event) {
        setData((prevState) => ({
            ...prevState,
            endereco: {
                rua: data.endereco.rua,
                numero: data.endereco.numero,
                cidade: event.target.value,
                estado: data.endereco.estado,
            }
        }));
    }

    function handleChangePacienteEstado(event) {
        setData((prevState) => ({
            ...prevState,
            endereco: {
                rua: data.endereco.rua,
                numero: data.endereco.numero,
                cidade: data.endereco.cidade,
                estado: event.target.value,
            }
        }));
    }

    function handleChangePacienteTelefone(event) {
        setData((prevState) => ({
            ...prevState,
            telefone: event.target.value,
        }));
    }

    function handleChangePacienteEmail(event) {
        setData((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    }

    async function salvar() {
        await axios
            .put(`https://nodejs-api-clinica.herokuapp.com/pacientes/${id}`, {
                nome: data.nome,
                cpf: data.cpf,
                rg: data.rg,
                endereco: {
                    rua: data.endereco.rua,
                    numero: data.endereco.numero,
                    cidade: data.endereco.cidade,
                    estado: data.endereco.estado,
                },
                telefone: data.telefone,
                email: data.email
            })
            .then(() => {
                window.open('/', '_self');
            })
            .catch((err) => {
                console.log(err);
                alert('Erro');
            });
    }

    return (
        <>
            {
                loading ? (
                    <h3>Carregando...</h3>
                ) : (
                    <Container maxWidth="sm">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <h3>Informações Pessoais:</h3>
                                        <TextField
                                            required
                                            label="Nome"
                                            autoComplete="off"
                                            defaultValue={data.nome}
                                            onChange={(event) => handleChangePacienteNome(event)}
                                        />

                                        <TextField
                                            required
                                            label="CPF"
                                            autoComplete="off"
                                            defaultValue={data.cpf}
                                            onChange={(event) => handleChangePacienteCPF(event)}
                                        />

                                        <TextField
                                            required
                                            label="RG"
                                            autoComplete="off"
                                            defaultValue={data.rg}
                                            onChange={(event) => handleChangePacienteRG(event)}
                                        />
                                    </div>

                                    <div>
                                        <h3>Endereço:</h3>
                                        <TextField
                                            required
                                            label="Rua"
                                            autoComplete="off"
                                            defaultValue={data.endereco.rua}
                                            onChange={(event) => handleChangePacienteRua(event)}
                                        />

                                        <TextField
                                            required
                                            label="Número"
                                            autoComplete="off"
                                            defaultValue={data.endereco.numero}
                                            onChange={(event) => handleChangePacienteNumero(event)}
                                        />

                                        <TextField
                                            required
                                            label="Cidade"
                                            autoComplete="off"
                                            defaultValue={data.endereco.cidade}
                                            onChange={(event) => handleChangePacienteCidade(event)}
                                        />

                                        <TextField
                                            required
                                            label="Estado"
                                            autoComplete="off"
                                            defaultValue={data.endereco.estado}
                                            onChange={(event) => handleChangePacienteEstado(event)}
                                        />
                                    </div>

                                    <div>
                                        <h3>Contato:</h3>
                                        <TextField
                                            required
                                            label="Telefone"
                                            autoComplete="off"
                                            defaultValue={data.telefone}
                                            onChange={(event) => handleChangePacienteTelefone(event)}
                                        />

                                        <TextField
                                            required
                                            label="Email"
                                            autoComplete="off"
                                            defaultValue={data.email}
                                            onChange={(event) => handleChangePacienteEmail(event)}
                                        />

                                    </div>

                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="success" onClick={() => salvar()} startIcon={<SaveIcon />}>
                                    Salvar
                                </Button>
                                &ensp;
                                <Link to="/">
                                    <Button
                                        variant="contained"
                                        color="error"
                                        startIcon={<CancelIcon />}
                                    >
                                        Cancelar
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>

                )
            }
        </>
    );
}
