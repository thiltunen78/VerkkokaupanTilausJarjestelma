var database = require('./database');

exports.registerCustomer = function(req,res)
{ 
    var customer = new database.Customer(req.body);
    customer.save(function(err)
    {    
        if(err)
        {
            res.status(500).send({status:err.message});
        }
        else
        {
            res.status(200).send({status:"Register succesful"});
        }
    });
}

exports.loginCustomer = function(req,res)
{
    var searchObject = {email:req.body.email, password:req.body.password};
    
    database.Customer.findOne(searchObject,
    function(err,data)
    {    
        if(err)
        {
            res.status(500).send({status:err.message});   
        }
        else
        {            
            if(data)
            {                
                req.session.loggedCustomer = data.email;                
                res.status(200).send({status:"Ok"});  //200 = ok          
            }
            else
            {
                res.status(401).send({status:"Wrong username or password"});
            }
        }
    });
}

exports.registerOrderHandler = function(req,res){
 
    var orderHandler = new database.OrderHandler(req.body);
    OrderHandler.save(function(err){
    
        if(err){
            res.status(500).send({status:err.message});
        }
        else{
            res.status(200).send({status:"Register succesful"});
        }
    });
}

exports.loginOrderHandler = function(req,res){

    var searchObject = {
        email:req.body.name
    };
    
    database.OrderHandler.findOne(searchObject,function(err,data){
    
        if(err){
            res.status(500).send({status:err.message});   
        }
        else{            
            if(data){                
                req.session.loggedOrderHandler = data.name;                
                res.status(200).send({status:"Ok"});  //200 = ok          
            }
            else{
                res.status(401).send({status:"Wrong username"});
            }
        }
    });
}

exports.getAllProducts = function(req,res){
    
    db.Product.find(function(err,data){
        
        if(err){
            console.log(err.message);
            res.send("Error in database");
        }
        else{
            res.send(data);
        }           
    });
}

exports.getProductsByGenreAndType = function(req,res)
{
    var genre = req.query.genre;
    var mediaType = req.query.mediaType;    
}

exports.addProduct = function(req,res){    
    
    var productTemp = new db.Product(req.body);
    //Save it to database
    productTemp.save(function(err,newData){
        if(err){        
            res.status(500).json({message:'Fail'});
        }else{                
            res.status(200).json({data:newData});
        }
    });     
}

exports.removeProduct = function(req,res)
{    
    var toDelete = [];
    if(req.query.forDelete instanceof Array)
        toDelete = req.query.forDelete;
    else
    {        
       toDelete.push(req.query.forDelete); 
    }
    
    db.Product.remove({_id:{$in:toDelete}},function(err,data){        
        if(err){
            console.log(err);
            res.status(500).send({message:err.message});
        }else{
            res.status(200).send({message:'Delete success'});                    
        }
    });
}