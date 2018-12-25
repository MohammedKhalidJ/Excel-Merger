const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require("body-parser");
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// viewed at http://localhost:3000
app.post('/excel', function(req, res) {
	 console.log(req.body);
	 console.log(req.file);
    res.send("helloworld");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))