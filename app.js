const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');


mongoose.connect('mongodb://localhost/newlinks');
let db = mongoose.connection;

db.on('error', ()=> console.log('houve um erro'));
db.once('open', ()=> console.log('sucess!'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(path.join(__dirname, 'templates')));
app.use('/', linkRoute);

const PORT = 5000;
app.listen(PORT, ()=>console.log('Server running on port', PORT));