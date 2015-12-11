var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.post('/logincustomer',function(req,res){

    queries.loginCustomer(req,res);
});

router.post('/registercustomer',function(req,res){
    
    queries.registerCustomer(req,res);
});

module.exports = router;