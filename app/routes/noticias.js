

module.exports = function (app){
     app.get('/noticias', function(req, res){
      
          let con = app.config.dbConnetion(); 
          let NoticiasDAO = new app.app.models.NoticiasDAO(con);

          NoticiasDAO.getNoticias(function (err, result) {
           res.render("noticias/noticias", {noticias : result});
          

          });
          
    });
};