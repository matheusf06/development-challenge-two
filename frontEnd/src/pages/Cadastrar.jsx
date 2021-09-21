import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { Link } from "react-router-dom";

import axios from 'axios';

export default function Cadastrar() {
    const [paciente, setPaciente] = useState([]);

    function handleChangePacienteNome(event) {
        setPaciente((prevState) => ({
            ...prevState,
            nome: event.target.value,
        }));
    }

    function handleChangePacienteCPF(event) {
        setPaciente((prevState) => ({
            ...prevState,
            cpf: event.target.value,
        }));
    }

    function handleChangePacienteRG(event) {
        setPaciente((prevState) => ({
            ...prevState,
            rg: event.target.value,
        }));
    }

    function handleChangePacienteRua(event) {
        setPaciente((prevState) => ({
            ...prevState,
            rua: event.target.value,
        }));
    }

    function handleChangePacienteNumero(event) {
        setPaciente((prevState) => ({
            ...prevState,
            numero: event.target.value,
        }));
    }

    function handleChangePacienteCidade(event) {
        setPaciente((prevState) => ({
            ...prevState,
            cidade: event.target.value,
        }));
    }

    function handleChangePacienteEstado(event) {
        setPaciente((prevState) => ({
            ...prevState,
            estado: event.target.value,
        }));
    }

    function handleChangePacienteTelefone(event) {
        setPaciente((prevState) => ({
            ...prevState,
            telefone: event.target.value,
        }));
    }

    function handleChangePacienteEmail(event) {
        setPaciente((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    }

    function salvar() {
        axios
            .post('https://nodejs-api-clinica.herokuapp.com/pacientes', {
                nome: paciente.nome,
                cpf: paciente.cpf,
                rg: paciente.rg,
                endereco: {
                    rua: paciente.rua,
                    numero: paciente.numero,
                    cidade: paciente.cidade,
                    estado: paciente.estado,
                },
                telefone: paciente.telefone,
                email: paciente.email
            })
            .then((res) => {
                window.open('/', '_self');
            })
            .catch((err) => {
                console.log(err);
                alert('Erro');
            });
    }

    return (
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
                                onChange={(event) => handleChangePacienteNome(event)}
                            />

                            <TextField
                                required
                                label="CPF"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteCPF(event)}
                            />

                            <TextField
                                required
                                label="RG"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteRG(event)}
                            />
                        </div>

                        <div>
                            <h3>Endereço:</h3>
                            <TextField
                                required
                                label="Rua"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteRua(event)}
                            />

                            <TextField
                                required
                                label="Número"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteNumero(event)}
                            />

                            <TextField
                                required
                                label="Cidade"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteCidade(event)}
                            />

                            <TextField
                                required
                                label="Estado"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteEstado(event)}
                            />
                        </div>

                        <div>
                            <h3>Contato:</h3>
                            <TextField
                                required
                                label="Telefone"
                                autoComplete="off"
                                onChange={(event) => handleChangePacienteTelefone(event)}
                            />

                            <TextField
                                required
                                label="Email"
                                autoComplete="off"
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
    );
}
