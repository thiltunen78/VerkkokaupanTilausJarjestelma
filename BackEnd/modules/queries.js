var database = require('./database');

exports.registerCustomer = function(req,res)
{       
    database.Customer.findOne().sort({created_at: -1}).exec(function(err, data)
    {        
        if(data)
            req.body.customerId = (data.customerId + 1);
        else
            req.body.customerId = 1;                    
    });
    
    var customer = new database.Customer(req.body);
    customer.save(function(err)
    {    
        if(err)
            res.status(500).send({status:err.message});
        else
            res.status(200).send({status:"Register successful"});        
    });
}

exports.loginCustomer = function(req,res)
{
    var searchObject = {email:req.body.email, password:req.body.password};
    
    database.Customer.findOne(searchObject,
    function(err,data)
    {    
        if(err)
            res.status(500).send({status:err.message});   
        else if(data)
        {                
            req.session.loggedCustomerEmail = data.email;                
            res.status(200).send({status:"Login successful"});  //200 = ok          
        }
        else
            res.status(401).send({status:"Wrong username or password"});            
    });
}

exports.getCurrentCustomerData = function(req,res)
{    
    database.Customer.findOne({email:req.session.loggedCustomerEmail},function(err,data)
    {  
        if(err)
            res.status(500).send({status:err.message});   
        else
            res.send(data);                     
    });
}

exports.registerOrderHandler = function(req,res)
{ 
    var orderHandler = new database.OrderHandler(req.body);
    OrderHandler.save(function(err)
    {    
        if(err)
            res.status(500).send({status:err.message});
        else
            res.status(200).send({status:"Register successful"});        
    });
}

exports.loginOrderHandler = function(req,res)
{
    var searchObject = {
        email:req.body.name
    };
    
    database.OrderHandler.findOne(searchObject,function(err,data)
    {    
        if(err)
            res.status(500).send({status:err.message});   
        else if(data)
        {                
            req.session.loggedOrderHandlerName = data.name;                
            res.status(200).send({status:"Login successful"});  //200 = ok          
        }
        else
            res.status(401).send({status:"Wrong username"});         
    });
}

exports.getAllProducts = function(req,res)
{    
    database.Product.find(function(err,data)
    {        
        if(err)
            res.status(500).send({status:err.message});
        else
            res.send(data);                   
    });
}

exports.getProductsByGenreAndType = function(req,res)
{
    var searchObject = {
        genre:req.query.genre,
        mediaType:req.query.mediaType
    };
    
    database.Product.find(searchObject,function(err,data)
    {    
        if(err)
            res.status(500).send({status:err.message});   
        else
            res.send(data);                 
    });
}

exports.addProduct = function(req,res)
{        
    var productTemp = new database.Product(req.body);
    //Save it to database
    productTemp.save(function(err,newData)
    {
        if(err)
            res.status(500).send({status:err.message});
        else
            res.status(200).json({data:newData});       
    });     
}

exports.removeProduct = function(req,res)
{    
    var toDelete = [];
    
    if(req.query.forDelete instanceof Array)
        toDelete = req.query.forDelete;
    else
       toDelete.push(req.query.forDelete); 
        
    database.Product.remove({_id:{$in:toDelete}},function(err,data)
    {        
        if(err)
            res.status(500).send({message:err.message});
        else
            res.status(200).send({message:'Remove successful'});        
    });
}

exports.getOrderByOrderId = function(req,res)
{    
    database.Order.findOne({orderId:req.query.orderId},function(err,data)
    {  
        if(err)
            res.status(500).send({status:err.message});   
        else
            res.send(data);              
    });
}

exports.getOrdersByCustomerId = function(req,res)
{
    database.Customer.findOne({customerId:req.session.customerId}).populate('orders').exec(function(err,data)
    {
        if(err)
            res.status(500).send({status:err.message});
        else if(data)
            res.send(data.orders);  
        else
            res.send(data);
                
    });
}

exports.getOrdersByHandler = function(req,res)
{    
    database.OrderHandler.findOne({orderHandlerName:req.query.orderHandlerName}).populate('orders').exec(function(err,data)
    {  
        if(err)
            res.status(500).send({status:err.message});
        else if(data)
            res.send(data.orders);        
        else
            res.send(data);        
    });
}

exports.getOrdersOfCurrentHandler = function(req,res) 
{  
    database.OrderHandler.findOne({orderHandlerName:req.session.loggedOrderHandlerName}).populate('orders').exec(function(err,data)
    {  
        if(err)
            res.status(500).send({status:err.message});
        else if(data)
            res.send(data.orders);        
        else
            res.send(data);        
    });
}

exports.getOrdersOfCurrentCustomer = function(req,res)
{        
    database.Customer.findOne({email:req.session.loggedCustomerEmail}).populate('orders').exec(function(err,data)
    {
        if(err)
            res.status(500).send({status:err.message});
        else if(data)
            res.send(data.orders);        
        else
            res.send(data);       
    });
}

exports.getNewOrders = function(req,res)
{    
}

exports.addOrder = function(req,res)
{    
}