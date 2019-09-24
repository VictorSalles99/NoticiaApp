const { check, validationResult } = require('express-validator');

module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
          res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
        });
        app.post('/noticias/salvar',[ check('titulo').isLength({min : 1}).withMessage('O Título é um campo obrigatorio'),
                                  check('resumo').isLength({min : 1}).withMessage('O Resumo é um campo obrigatório'),
                                  check('resumo').isLength({max : 100}).withMessage('O Resumo deve ter no méximo 100 caracteres'),
                                  check('autor').not().contains(1,2,3,4,5,6,7,8,9,0).withMessage('O campo autor não aceita números'),
                                  check('autor').isLength({min : 1}).withMessage('Autor é um campo obrigatório'),
                                  check('autor').isLength({max : 30}).withMessage('O autor deve ter no máximo 30 caracteres'),
                                  check('noticia').isLength({min :1}).withMessage('A notícia é um campo obrigatório'),
                                  check('data_noticia').custom(isValidDate).withMessage('A data é um campo Obrigatório')],
                                    function(req, res){
            let noticia = req.body;
            let con = app.config.dbConnetion(); 
            let NoticiasDAO = new app.app.models.NoticiasDAO(con);
            const error = validationResult(req); 
              
                     
            if (!error.isEmpty()) {
              //retorna os erros na tela em formato json
              // return res.status(422).json({ validacao : error});
 
               //retorna os erros em formato html 
               return res.render("admin/form_add_noticia", {validacao : error.array(), noticia : noticia});
               
             }
 
             NoticiasDAO.salvarNoticia(noticia,function (err, result) {
             res.redirect("/noticias");          
           });

        });

        function isValidDate(value) {
          if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
        
          const date = new Date(value);
          if (!date.getTime()) return false;
          return date.toISOString().slice(0, 10) === value;
        }
};