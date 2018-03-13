(function() {

  // # Vaiables generales de mensajes y configuracion de Servidor
  var app, express, http, io, server, port, porthttps;
  var variables;

  variables = [];
  // # Inicializacion de variables
  express = require('express');
  http = require('http');
  port = process.env.PORT || 8001;
  porthttps = process.env.PORT || 443;

  app = express();

  // # Consfiguracion de server
  app.configure(function() {
    app.set('views', __dirname + '/views');
    //app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express["static"](__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    return app.use(app.router);
  });

  // # Consfiguracion de server en desarrollo
  app.configure('development', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', function(req, res) {
    return res.render('index.html', {
    });
  });

  app.get('/grails', function(req, res) {
    return res.render('grails', {
    });
  });

  server = app.listen(port);

  console.log("Servidor HTTP escuchando en puerto: " + port);

  console.log("Server Success OK");

}).call(this);