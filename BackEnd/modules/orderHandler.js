var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.post('/signinorderhandler',function(req,res)
{
    queries.signInOrderHandler(req,res);
});

router.post('/registerorderhandler',function(req,res)
{        
    queries.registerOrderHandler(req,res);
});

module.exports = router;