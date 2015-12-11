var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.post('/loginadmin',function(req,res){

    queries.loginAdmin(req,res);
});

router.post('/registeradmin',function(req,res){
    
    queries.registerAdmin(req,res);
});

module.exports = router;