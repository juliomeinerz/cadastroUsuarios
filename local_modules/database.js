var mongoose = require('mongoose');
// informações do banco
	var options = {
		user:'julio',
		pass:'123',
		auth: {
       	 authdb: 'admin'
    	}
	}
// conecta ao banco
	mongoose.connect('mongodb://localhost/test',options);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log("Conectado ao banco");
	});

