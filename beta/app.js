const express = require('express')
const app = express()
const fs = require('fs')

app.use('/static', express.static('static'))
app.use('/node_modules', express.static('node_modules'))

//var parser = require('./fileparser.js').parser;
//console.log(parser);

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/templates/index.html', 'utf8', function(err, text){
        res.send(text);
    });
})

app.listen(8000, () => console.log('Eu4ledger listening on port 8000'))