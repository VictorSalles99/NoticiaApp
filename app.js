let app = require('./config/server');

//let rota_noticias = require('./app/routes/noticias');//(app);
//rota_noticias(app);

//let rota_home = require('./app/routes/home');//(app);
//rota_home(app);

//let rota_formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia');//(app);
//rota_formulario_inclusao_noticia(app);

app.listen(3000, function(){
    console.log('servidor on');
 });
