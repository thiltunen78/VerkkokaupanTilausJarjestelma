var database = require('./database');

exports.registerCustomer = function(req,res)
{ 	
    database.Customer.findOne().sort({created_at: -1}).exec(function(err, data)
    {        
        if(data)
            req.body.customerId = (data.customerId + 1);
        else
            req.body.customerId = 1; 			
		
		var customer = new database.Customer(req.body);
    	customer.save(function(err)
    	{    
        	if(err)
            	res.status(500).send({status:err.message});
        	else
            	res.status(200).send({status:"Register successful"});        
    	});
    });   
	
    
}

exports.signInCustomer = function(req,res)
{
    var searchObject = {email:req.body.email, password:req.body.password};
    
    database.Customer.findOne(searchObject,
    function(err,data)
    {    
        if(err)
            res.status(500).send({status:err.message});   
        else if(data)
        {                
            req.session.customerEmail = data.email;                
            res.status(200).send({status:"Sign in successful"});  //200 = ok          
        }
        else
            res.status(401).send({status:"Wrong username or password"});            
    });
}

exports.getCurrentCustomerData = function(req,res)
{    
    database.Customer.findOne({email:req.session.customerEmail},function(err,data)
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
    orderHandler.save(function(err)
    {    
        if(err)
            res.status(500).send({status:err.message});
        else
            res.status(200).send({status:"Register successful"});        
    });
}

exports.signInOrderHandler = function(req,res)
{	
    var searchObject = {
        orderHandlerName:req.body.orderHandlerName,
        password:req.body.password
    };
    
    database.OrderHandler.findOne(searchObject,function(err,data)
    {    
        if(err)
            res.status(500).send({status:err.message});   
        else if(data)
        {                
            req.session.orderHandlerName = data.orderHandlerName;                
            res.status(200).send({status:"Sign in successful"});  //200 = ok          
        }
        else
            res.status(401).send({status:"Wrong username or password"});         
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
    var toRemove = [];
    
    if(req.query.forRemove instanceof Array)
    	toRemove = req.query.forRemove;
    else
       	toRemove.push(req.query.forRemove); 
        
    database.Product.remove({_id:{$in:toRemove}},function(err,data)
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
    database.Customer.findOne({customerId:req.query.customerId}).populate('orders').exec(function(err,data)
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
    database.OrderHandler.findOne({orderHandlerName:req.session.orderHandlerName}).populate('orders').exec(function(err,data)
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
    database.Customer.findOne({email:req.session.customerEmail}).populate('orders').exec(function(err,data)
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