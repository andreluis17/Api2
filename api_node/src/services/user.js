//criar um arquivo para cada serviço como pro usuario ou banco 
import database from '../repository/conection.js';

async function createUser(nome, email, senha, tipo_usuario){
  const sql = 'INSERT INTO tbl_usuario(nome,email,senha, tipo_usuario) values (?, ?, ?, ?)';
  const dados = [nome,email,senha,tipo_usuario];

  const conn = await database.connect()
  conn.query(sql, dados) // executar o comando solicitado
  conn.end(); // fechar conexão com o banco
}

async function updateUSER(nome,email,senha, tipo_usuario, id_usuario){
  const sql = 'UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ?';
  const dados = [nome,email,senha, tipo_usuario, id_usuario]
  
  const conn = await database.connect();
  conn.query(sql, dados) // executar o comando solicitado
  conn.end(); // fechar conexão com o banco
}


export default {createUser,updateUSER};




// async function DeleteUSER(){
// const sql = 'Delete tbl_usuario nome  ';
// const dados = []

// const conn = await database.connect();
// conn.query(sql, dados)
// conn.end();

// }