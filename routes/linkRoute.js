const express = require('express');
const Router = express.Router();
const linkControl = require('../controls/linkControl');
var methodOverride = require('method-override')

Router.use(methodOverride('_method'));

Router.get('/', linkControl.allLinks);
Router.get('/:title', linkControl.redirect);
Router.get('/edit/:id', linkControl.loadLink);
Router.get('/add', (req, res)=>{
    res.render('index', { error: false, body: {} })
});

Router.post('/edit/:id', express.urlencoded({ extended: true }), linkControl.editLink)
Router.post('/', express.urlencoded({ extended: true }), linkControl.addLink);



Router.delete('/:id', linkControl.deleteLink);
Router.delete('/', express.urlencoded({ extended: true }), linkControl.deleteLink);

module.exports = Router;