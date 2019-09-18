const { check, validationResult } = require('express-validator');

module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia")
        });
    app.post('/noticias/salvar',[check('titulo').isLength({min : 1}),
                                 check('resumo').isLength({min : 1}),
                                 check('resumo').isLength({max : 100}),
                                 check('autor').isLength({min : 1}),
                                 check('autor').isLength({max : 30}),
                                 check("noticia").isLength({min :1})
                                 


                                ], function(req, res){
            let noticia = req.body;
            let con = app.config.dbConnetion(); 
            let NoticiasDAO = new app.app.models.NoticiasDAO(con);
            const errors = validationResult(req);
            
            
            if (!errors.isEmpty()) {
              return res.status(422).send('Verifque os campos');
            }

            NoticiasDAO.salvarNoticia(noticia,function (err, result) {
            res.redirect("/noticias");          
          });

        });
};