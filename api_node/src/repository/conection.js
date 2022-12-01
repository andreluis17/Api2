import mysql2 from 'mysql2/promise'

async function connect(){ // ñ sei pra que serve, mas coloca o a async
  const connection = mysql2.createConnection({
    // criar propriedades para conectar com o banco de dados
    host: 'localhost', // onde nosso banco esta localizado
    port: 3306, // porta do banco
    user: 'root', // user do banco de dados (usuario do banco)
    password: '', // senha do database
    database: 'cinema' // nome do banco
  })
  return connection; // retorna os valores criados dentro da função
}

export default {connect}; // deixa a função publica