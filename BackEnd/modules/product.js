var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.get('/getallproducts',function(req,res)
{
    query.getAllProducts(req,res);
});

router.get('/getproductsbygenreandtype', function(req,res)
{    
    query.getProductsByGenreAndType(req,res);    
});

router.post('/addproduct',function(req,res)
{
    query.addProduct(req,res);
});

router.delete('/removeproduct',function(req,res)
{    
    query.removeProduct(req,res);
});

module.exports = router;