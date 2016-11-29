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

router.get('/logout',function(req,res){
    req.session.destroy();
	res.redirect('/#/admin');
});

// this router checks if admin is logged in or not
router.get('/isLogged',function(req,res)              
{
    //admin is logged in if session contains orderHandlerName attribute
    if(req.session.orderHandlerName)
        res.status(200).send([{status:'ok'}]);    
    else
        res.status(401).send([{status:'unauthorized'}]);
});

router.get('/signedinorderhandler',function(req,res)
{
	res.status(200).send([req.session.orderHandlerName]);     
});
		   
module.exports = router;