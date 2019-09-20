let express = require('express');
let consign = require('consign');
let bodyparser = require('body-parser');
let ex = require ('express-validator');
let assert = require('assert');

let app = express();
app.set('view engine','ejs');
app.set('views', './app/views');

app.use(bodyparser.urlencoded({extended : true}));
//express validator
app.use(express.json());
//app.post('/noticias/salvar', (req, res) => {
  //User.create({
    //username: req.body.username,
   // password: req.body.password
  //}).then(user => res.json(user));
//});
app.use(express.static('public'));



//faz o includ das rotas (Centralizam elas apenas em um lugar). O then, inicia o includ de outras 
consign()
        .include('app/routes')
        .then('config/dbConnetion.js')
        .then('app/models')
        .then('app/controllers')
        .into(app);
        
module.exports = app;
