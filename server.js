var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		fileContent = data
		res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	stringifyFile = req.params.note;
	fs.writeFile('//test.json', stringifyFile, function(req, res, next) {
		console.log('file updated');
	});
});

app.listen(3000);