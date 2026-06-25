var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

router.get('/', function(req, res, next){
	res.render('mesas', {
		title: 'Mesas - Lacatedraldelpisco',
		username: req.user.username
	});
});

router.post('/edit/:id', function(req, res, next) {
	var id = req.params.id;
	var db = req.db;
	
	var collection = db.get('pedidos');
	var mesa = req.body.mesa;
	var personas = req.body.personas;
	var pedido = req.body.pedido;
	var mozo = req.body.mozo;
	var comentarios = req.body.comentarios;
	console.log(comentarios);

	var descuento = req.body.descuento;
	var metodoPago = req.body.metodoPago;
	
	var pedidosCant = req.body.pedidosCant;
	var pedidosPrecio = req.body.precio;
	//console.log(typeof pedidosCant + "a");
	//console.log(descuento.length + " b");

	/*Data*/
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutes = fecha.getMinutes();
	var resultadoHora = hora + ":" + minutes;

	var mes = fecha.getMonth();
	var ano = fecha.getFullYear();
	var dia = fecha.getDate();

	if(mes == 0) {
		mes = "Enero";
	}
	else if(mes == 1) {
		mes = "Febrero";
	}
	else if(mes == 2) {
		mes = "Marzo";
	}
	else if(mes == 3){
		mes = "Abril";
	}
	else if(mes == 4) {
		mes = "Mayo";
	}
	else if(mes == 5) {
		mes = "Junio";
	}
	else if(mes == 6) {
		mes = "Julio";
	}
	else if(mes == 7) {
		mes = "Agosto";
	}
	else if(mes == 8) {
		mes = "Septiembre";
	}
	else if(mes == 9) {
		mes = "Octubre";
	}
	else if(mes == 10) {
		mes = "Noviembre";
	}
	else if(mes == 11){
		mes = "Diciembre";
	}
	else  {
		mes = "Ningun mes se encontro";
	}
	var resultadoFecha = "El " + dia + " de " + mes  + " del " + ano;



	//console.log(descuento + " uno");
	//console.log(descuento.length + " dos");
	
	collection.findOne({'_id': id}, function(err, doc){
		
		if(pedidosCant == undefined) {
			console.log('error');
		}
		else {
			collection.update({
			 _id: ObjectId(id)},
			
			 {'$push': {
			 	'Adicionales': {
			 		'Precio': pedidosCant,
			 		'Pedido': pedidosPrecio
			 	}
			 }
			 	}).success(function(doc){
				res.json({inserted: true});
				}).error(function(err){
					console.log('hubo error' + err);
				});
		}
			
		if(descuento > 0){
			collection.update(
				{_id: ObjectId(id)},
				{$set: 
				 	{'Descuento': descuento}
			})
			.success(function(doc){
				res.end(JSON.stringify({inserted: true}));
			});
		}
		else {
			console.log('error');
		}

		if(metodoPago == "Efectivo" || metodoPago == "Tarjeta"){
			collection.update(
				{_id: ObjectId(id)},
				{$set: 
				 	{'MetodoPago': metodoPago}
			})
			.success(function(doc){
				res.end(JSON.stringify({inserted: true}));
			});
		}

		
			collection.update(
				{_id: ObjectId(id)},
				{$set: 
				 	{'Comentarios': comentarios}
			})
			.success(function(doc){
				res.end(JSON.stringify({inserted: true}));
			});
		
		/*else if(metodoPago == "Tarjeta") {
			collection.update(
				{_id: ObjectId(id)},
				{$set: 
				 	{'MetodoPago': metodoPago}
			})
			.success(function(doc){
				res.end(JSON.stringify({inserted: true}));
			});
		}*/
		
	});

	


	
});

module.exports = router;