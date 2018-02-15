var cheerio = require('cheerio');
var request = require('request');

var fs = require('fs');

request('http://www.imdb.com/chart/moviemeter?ref_=nv_mv_mpm_8', function(err, res, body) {
	if(err) console.log('Erro: ' + err);

     var $  = cheerio.load(body);

     $('.lister-list tr').each(function() {
     	var title = $(this).find('.titleColumn a').text().trim();
     	var rating = $(this).find('.imdRating strong').text().trim();

     	console.log('Titulo ' + title);

     	// fs.appendFile('imdb.txt', title + ' ', + rating + '\n');

     	fs.appendFile('imdb.txt', title + '' + rating + '\n' , function (err) {
		  if (err) throw err;
		  console.log('salvo!');
		});
     })

});
