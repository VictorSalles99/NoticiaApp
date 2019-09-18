let http = require('http');
let server = http.createServer(function(req, res){

    let categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de tecnologia</body></html>");

    }else if (categoria == '/moda'){
        res.end("<html><body>Portal de moda</body></html>");

    }else{
        res.end("<html><body>Portal de notcias</body></html>");

    }
}).listen(3000);

console.log('Servidor iniciado');
