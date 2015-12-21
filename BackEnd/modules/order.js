var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.get('/byorderid', function(req,res)
{    
    query.getOrderByOrderId(req,res);    
});

router.get('/bycustomerid', function(req,res)
{    
    query.getOrdersByCustomerId(req,res);    
});

router.get('/byhandler', function(req,res)
{    
    query.getOrdersByHandler(req,res);    
});

router.get('/neworders', function(req,res)
{    
    query.getNewOrders(req,res);    
});

router.post('/',function(req,res)
{
    query.addOrder(req,res);
});

module.exports = router;