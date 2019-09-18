//ESSA É UMA CLASSE NO JAVASCRIPT
function NoticiasDAO(con){

    this._con = con;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._con.query('SELECT * FROM noticias', callback);
}
NoticiasDAO.prototype.getNoticia = function(callback){
    this._con.query('SELECT * FROM noticias where id_noticia=19', callback)
}
NoticiasDAO.prototype.
salvarNoticia = function(noticia, callback){
    console.log(noticia);
    this._con.query('insert into noticias set ?', noticia, callback)
}

module.exports =  function(){
   return NoticiasDAO;
}
