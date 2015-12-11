var express = require("express"); 
var path = require("path");
var bodyParser = require("body-parser");
// this is used for creating a secret key value for our session cookie
var uuid = require('uuid');
// this is used to create a session object for client
var session = require('express-session');

var customer = require('./modules/customer');
var order = require('./modules/order');
var orderHandler = require('./modules/orderHandler');
var product = require('./modules/product');

// luodaan serveri
var app = express(); 

//========================MIDDLEWARES========================================
app.use(session({
    secret:uuid.v1(),
    cookie:{maxAge:1800000}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Define middlewares for static files(.html,.css,.js files that are loaded by browser when parsing index.html file)
app.use('/',express.static(path.join(__dirname,'../FrontEnd/views')));
app.use('/FrontEnd/css',express.static(path.join(__dirname,'../FrontEnd/css')));
app.use('/FrontEnd/lib',express.static(path.join(__dirname,'../FrontEnd/lib')));
app.use('/FrontEnd/module',express.static(path.join(__dirname,'../FrontEnd/module')));
app.use('/FrontEnd/controllers',express.static(path.join(__dirname,'../FrontEnd/controllers')));
app.use('/FrontEnd/factories',express.static(path.join(__dirname,'../FrontEnd/factories')));
app.use('/FrontEnd/fonts',express.static(path.join(__dirname, '../FrontEnd/fonts')));
//======================OUR REST API MIDDLEWARES===============================
app.use('/customer',customer);
app.use('/order',order);
app.use('/orderHandler',orderHandler);
app.use('/product',product);
//=========================ROUTERS=============================================
app.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect('/');

// käynnistetään serveri
app.listen(3000);   