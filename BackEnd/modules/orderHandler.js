var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.post('/loginorderhandler',function(req,res){

    queries.loginOrderHandler(req,res);
});

router.post('/registeorderhandler',function(req,res){
    
    queries.registerOrderHandler(req,res);
});

module.exports = router;