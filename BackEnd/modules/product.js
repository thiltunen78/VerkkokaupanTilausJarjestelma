var express = require("express");
var queries = require('./queries');
var multer = require('multer');

var router = express.Router();

var storage = multer.diskStorage(
	{ 	//multers disk storage settings
        destination: function (req, file, cb){
            cb(null, './productimages/')
    	},
        filename: function (req, file, cb){
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

var upload = multer(
	{ //multer settings
    	storage: storage
    }).single('file');
   
router.post('/uploadimage', function(req, res) 
{
	console.log("serverinpäässä");
	
	upload(req,res,function(err)
	{
    	if(err)
		{
			console.log(err);
			console.log("error");
        	res.json({error_code:1,err_desc:err});
            return;
        }
        
		res.json({error_code:0,err_desc:null});
    })       
});

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