var express = require("express");
var queries = require('./queries');

var router = express.Router();
		   
router.post('/signincustomer',function(req,res)
{
    queries.loginCustomer(req,res);
});

router.post('/registercustomer',function(req,res)
{    
    queries.registerCustomer(req,res);
});

router.get('/getcurrentcustomerdata', function(req,res)
{
    queries.getCurrentCustomerData(req,res);    
});

router.get('/logout',function(req,res){
    req.session.destroy();
	res.redirect('/');
});

// this router checks if user is logged in or not
router.get('/isLogged',function(req,res)              
{
    //user is logged in if session contains customerEmail attribute
    if(req.session.customerEmail)
        res.status(200).send([{status:'ok'}]);    
    else
        res.status(401).send([{status:'unauthorized'}]);
});

router.get('/signedincustomer',function(req,res)
{
	res.status(200).send([req.session.customerEmail]);     
});
		   
module.exports = router;