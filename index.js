const express = require('express'),
app = express();

const cors = require("cors");

var url = require('url');
var dt = require('./date-time');

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

app.get('/about', (request, response) => {
	console.log('Calling "/about" on the Node.js server.')
	response.type('text/plain')
	response.send('This is a website that utilizes server-side node.js to implement a dice rolling application.')
})

app.get('/generateNum1To6', (request, response) => {
    console.log('Calling "/generateNum1To6" on the Node.js server.')
    
    let die = Math.floor(Math.random() * 6) + 1;

    response.type('text/plain');
    response.send(die);
})