'use strict';

const AWS = require('aws-sdk');

exports.handler = async (event, context) => {

    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const { id, nome, cpf, rg, telefone, email, rua, numero, cidade, estado } = JSON.parse(event.body);

    const params = {
        TableName: "Pacientes",
        Item: {
            id: id,
            nome: nome,
            cpf: cpf,
            rg: rg,
            telefone: telefone,
            email: email,
            rua: rua,
            numero: numero,
            cidade: cidade,
            estado: estado,
        }
    }

    try {

        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;

    } catch (err) {

        responseBody = `Falha ao inserir item: ${err}`;
        statusCode = 403;

    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };

    return response;
}