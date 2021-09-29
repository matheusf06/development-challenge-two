const mongoose = require('mongoose')

const PacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    endereco: {
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

const Paciente = mongoose.model('Paciente', PacienteSchema)
module.exports = Paciente