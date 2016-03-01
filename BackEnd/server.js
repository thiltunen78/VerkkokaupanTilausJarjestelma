var express = require("express"); 
var path = require("path");
var bodyParser = require("body-parser");
//for creating a secret key value for session cookie
var uuid = require('uuid');
//to create a session object for client
var session = require('express-session');

var customer = require('./modules/customer');
var order = require('./modules/order');
var orderHandler = require('./modules/orderHandler');
var product = require('./modules/product');

var app = express(); 

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

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
app.use('/FrontEnd/modules',express.static(path.join(__dirname,'../FrontEnd/modules')));
app.use('/FrontEnd/controllers',express.static(path.join(__dirname,'../FrontEnd/controllers')));
app.use('/FrontEnd/factories',express.static(path.join(__dirname,'../FrontEnd/factories')));
app.use('/FrontEnd/fonts',express.static(path.join(__dirname, '../FrontEnd/fonts')));
app.use('/FrontEnd/directives',express.static(path.join(__dirname, '../FrontEnd/directives')));
//======================OUR REST API MIDDLEWARES===============================
app.use('/customer',customer);
app.use('/order',order);
app.use('/orderhandler',orderHandler);
app.use('/product',product);
        
//Listen the given port in given ip address
app.listen(port,ip); 