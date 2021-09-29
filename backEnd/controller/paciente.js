// Procurar por todos os pacientes
const getPacientes = async (Paciente, req, res) => {
    const pacientes = await Paciente.find({})
    res.send(pacientes)
}

// Pocurar por um paciente em especifico
const getUmPaciente = async (Paciente, req,res) => {
    const paciente = await Paciente.findOne({ _id: req.params.id })
    res.send(paciente)
}

// Cadastrar novo paciente
const postPaciente =  async(Paciente, req,res) => {
    const paciente = new Paciente(req.body)

    paciente.nome = req.body.nome
    paciente.cpf = req.body.cpf
    paciente.rg = req.body.rg
    paciente.endereco.rua = req.body.endereco.rua
    paciente.endereco.numero = req.body.endereco.numero
    paciente.endereco.cidade = req.body.endereco.cidade
    paciente.endereco.estado = req.body.endereco.estado
    paciente.telefone = req.body.telefone
    paciente.email = req.body.email

    try{
        await paciente.save()
        res.send(paciente)
    }
    catch(e){
        res.json({
            success: false,
            errors: Object.keys(e.errors)
        })
    }
}

// Excluir paciente 
const deletePaciente =  async (Paciente,req,res) => {
    await Paciente.deleteOne({ _id: req.params.id })
    res.send({
        success: true
    })
}

// Atualizar paciente
const putPaciente = async(Paciente,req,res) => {
    const paciente = await Paciente.findOne({ _id: req.params.id })

    paciente.nome = req.body.nome
    paciente.cpf = req.body.cpf
    paciente.rg = req.body.rg
    paciente.endereco.rua = req.body.endereco.rua
    paciente.endereco.numero = req.body.endereco.numero
    paciente.endereco.cidade = req.body.endereco.cidade
    paciente.endereco.estado = req.body.endereco.estado
    paciente.telefone = req.body.telefone
    paciente.email = req.body.email

    try{
        await paciente.save()
        res.send(paciente)

    }catch(e){
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        })
    }
}

module.exports = {
    getPacientes,
    getUmPaciente,
    postPaciente,
    deletePaciente,
    putPaciente
}