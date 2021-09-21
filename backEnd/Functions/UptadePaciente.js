'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { id } = event.pathParameters;
  const { nome, cpf, rg, telefone, email, rua, numero, cidade, estado } = JSON.parse(event.body);

  const params = {
    TableName: "Pacientes",
    Key: {
      id: id
    },
    UpdateExpression: "set nome = :n, cpf = :c, rg = :r, telefone = :t, email = :e, rua = :er, numero = :en, cidade = :ec, estado = :ee",
    ExpressionAttributeValues: {
      ":n": nome,
      ":c": cpf,
      ":r": rg,
      ":t": telefone,
      ":e": email,
      ":er": rua,
      ":en": numero,
      ":ec": cidade,
      ":ee": estado,
    },
    ReturnValues: "UPDATED_NEW"
  };

  try {
    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch (err) {
    responseBody = `Falha ao atualizar produto: ${err}`;
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
};