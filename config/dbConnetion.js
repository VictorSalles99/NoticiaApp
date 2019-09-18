let mysql = require('mysql');

let connectionMysql = function(){
  console.log("Conexão com o banco de dados estabelecida");
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portal_noticias"
  });

}

module.exports = function(){
  console.log("Conexão com o banco de dados carregada");
  return connectionMysql;
}   
