const express = require('express')
const Paciente = require('../models/paciente')

const pacienteController = require('../controller/paciente')

const router = express.Router()

// Procurar por todos os pacientes
router.get('/', pacienteController.getPacientes.bind(null, Paciente))
// Pocurar por um paciente em especifico
router.get('/:id', pacienteController.getUmPaciente.bind(null, Paciente))
// Cadastrar novo paciente
router.post('/', pacienteController.postPaciente.bind(null, Paciente))
// Excluir paciente 
router.delete('/:id', pacienteController.deletePaciente.bind(null, Paciente))
// Atualizar paciente
router.put('/:id', pacienteController.putPaciente.bind(null, Paciente))

module.exports = router