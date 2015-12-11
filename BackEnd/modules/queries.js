var database = require('./database');

exports.registerCustomer = function(req,res){
 
    var customer = new database.Customer(req.body);
    customer.save(function(err){
    
        if(err){
            res.status(500).send({status:err.message});
        }
        else{
            res.status(200).send({status:"Register succesful"});
        }
    });
}

exports.loginCustomer = function(req,res){

    var searchObject = {
        email:req.body.email,
        password:req.body.password
    };
    
    database.Customer.findOne(searchObject,function(err,data){
    
        if(err){
            res.status(500).send({status:err.message});   
        }
        else{            
            if(data){                
                req.session.loggedCustomer = data.email;                
                res.status(200).send({status:"Ok"});  //200 = ok          
            }
            else{
                res.status(401).send({status:"Wrong username or password"});
            }
        }
    });
}