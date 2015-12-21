var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.get('/getorderbyorderid', function(req,res)
{    
    query.getOrderByOrderId(req,res);    
});

router.get('/getordersbycustomerid', function(req,res)
{    
    query.getOrdersByCustomerId(req,res);    
});

router.get('/getordersbyhandler', function(req,res)
{    
    query.getOrdersByHandler(req,res);    
});

router.get('/getneworders', function(req,res)
{    
    query.getNewOrders(req,res);    
});

router.get('/getordersofcurrenthandler', function(req,res)
{    
    query.getOrdersOfCurrentHandler(req,res);    
});

router.get('/getordersofcurrentcustomer', function(req,res)
{    
    query.getOrdersOfCurrentCustomer(req,res);    
});

router.post('/addorder',function(req,res)
{
    query.addOrder(req,res);
});

module.exports = router;