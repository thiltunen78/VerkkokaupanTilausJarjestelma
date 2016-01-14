var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.get('/getorderbyorderid', function(req,res)
{    
    queries.getOrderByOrderId(req,res);    
});

router.get('/getordersbycustomerid', function(req,res)
{    
    queries.getOrdersByCustomerId(req,res);    
});

router.get('/getordersbyhandler', function(req,res)
{    
    queries.getOrdersByHandler(req,res);    
});

router.get('/getneworders', function(req,res)
{    
    queries.getNewOrders(req,res);    
});

router.get('/getordersofcurrenthandler', function(req,res)
{    
    queries.getOrdersOfCurrentHandler(req,res);    
});

router.get('/getordersofcurrentcustomer', function(req,res)
{    
    queries.getOrdersOfCurrentCustomer(req,res);    
});

router.post('/addorder',function(req,res)
{
    queries.addOrder(req,res);
});

module.exports = router;