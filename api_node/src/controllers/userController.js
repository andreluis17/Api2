import express from "express";
import database from "../services/user.js"

const routes = express.Router();

routes.post('/', async (request, response) => { // request (recebe dado front) response (envia dados back)
  const {nome,email,senha,tipo_usuario} = request.body;

   await database.createUser(nome,email,senha,tipo_usuario);//aguardar a função

  //console.log(nome,email,senha,tipo_usuario)
  response.status(200).send('Pai ta on...')//O que responde pro front

  if(nome ===''){
return(response.status(400).send("Erro"))

  }
})

// routes.get('/',   (request, response) => { // request (recebe dado front) response (envia dados back)
//   const {nome,email,senha,tipo_usuario} = request.body;
//   console.log(nome,email,senha,tipo_usuario)
//   response.status(200).send('Pai ta on...')
// })

export default routes;