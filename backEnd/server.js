const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cors = require('cors')
const compression = require('compression')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const pacientes = require('./routes/pacientes.js')

mongoose.connect('mongodb+srv://meuadmin:matheus555@cluster0.wsthk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(cors())
app.use(compression())

app.use(bodyParser.json({ extended: false }))

app.use('/pacientes', pacientes)

app.get('/', (req,res) => {
    res.header('Cache-Control', 'public, max-age=3600')
    res.send("<p>Olá seja bem vindo a minha API.</p> <p>Acesse <a href='https://nodejs-api-clinica.herokuapp.com/pacientes'>Pacientes</a> para ver a lista de pacientes cadastrados</p>")
})

app.listen(port, err => {
    if(err) console.log(err)
    else    console.log('Servidor rodando na porta', port)
})