var express = require("express");
var queries = require('./queries');

var router = express.Router();

router.get('/',function(req,res)
{
    query.getAllProducts(req,res);
});

router.get('/bygenreandtype', function(req,res)
{    
    query.getProductsByGenreAndType(req,res);    
});

router.post('/',function(req,res)
{
    query.addProduct(req,res);
});

router.delete('/',function(req,res)
{    
    query.removeProduct(req,res);
});

module.exports = router;