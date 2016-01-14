var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.get('/getallproducts',function(req,res)
{
    queries.getAllProducts(req,res);
});

router.get('/getproductsbygenreandtype', function(req,res)
{    
    queries.getProductsByGenreAndType(req,res);    
});

router.post('/addproduct',function(req,res)
{
    queries.addProduct(req,res);
});

router.delete('/removeproduct',function(req,res)
{    
    queries.removeProduct(req,res);
});

module.exports = router;