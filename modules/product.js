var express = require("express");
var queries = require('./queries');
var multer = require('multer');
var fs = require('fs');

var router = express.Router();
var data_dir = process.env.OPENSHIFT_DATA_DIR || './productimages/';

var storage = multer.diskStorage(
	{ 	//multers disk storage settings
        destination: function (req, file, cb){
            cb(null, data_dir)
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
	upload(req,res,function(err)
	{
    	if(err)
		{
			console.log(err);
			console.log("error");
        	res.json({error_code:1,err_desc:err});
            return;
        }
        
		res.json({error_code:0,err_desc:null, file: req.file});
    })       
});

router.get('/getproducts', function(req,res)
{    
    queries.getProducts(req,res);    
});

router.post('/addproduct',function(req,res)
{
    queries.addProduct(req,res);
});

router.delete('/removeproduct',function(req,res)
{
	//remove product image files
	var toRemoveFiles = [];
		    
    if(req.query.forRemoveFiles instanceof Array)
    	toRemoveFiles = req.query.forRemoveFiles;
    else
       	toRemoveFiles.push(req.query.forRemoveFiles); 
		
	for(var i=0;i<toRemoveFiles.length;i++){		
    	fs.unlink(data_dir + toRemoveFiles[i]);		
	}	
	
	// remove entries from the database
    queries.removeProduct(req,res);
});

module.exports = router;