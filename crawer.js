var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var pageTo = "http://angular.io";
console.log("visitando a página: " + pageTo);

request(pageTo, function(err, res, body) {
	if(err) {
		console.log('Erro: ' + err);

		// checka se status é igual a 200 
		console.log('is status: ', res.statusCode);
	}	

	if(res.statusCode === 200) {
		var $ = cheerio.load(body);
		console.log("Page title: " + $('title').text());
	}
});
