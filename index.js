const express = require('express');
const forwarded = require('forwarded-for');
const app = express();

app.set('view engine', 'ejs');


app.get("/api/whoami", function(req, res){
	const language = req.headers['accept-language'].split(',')[0],
		  software = req.headers['user-agent'].match(/\([^\(\)\n\f]*\)/)[0],
		  adress = forwarded(req, req.headers);
	const ipAdress = adress.ip;
	res.send({
		"ipadress": ipAdress,
		"language": language,
		"software": software
	});
	
})


const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Server running at '+port);
});
