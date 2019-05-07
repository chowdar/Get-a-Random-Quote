let express = require('express');

let app = express();

let quotes = require('./quotes')

app.get('/', (req, res) =>{
    let randomQuote = quotes[Math.ceil(Math.random()*quotes.length)-1]
    res.send(randomQuote.quote); 
})


app.get(express.static('./public'))
module.exports = app;