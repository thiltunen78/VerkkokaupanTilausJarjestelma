var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/verkkokauppa',connectionStatus);

//connection callback for fail and ok cases
function connectionStatus(err,ok){
    
    if(err){        
        console.log(err.message);        
    }
    else{        
        console.log("Connected to database!");
    }
}

//var User = mongoose.model('User',{
//    username:{type:String,unique:true},
//    password:String,
//    friends:[{type:mongoose.Schema.Types.ObjectId,ref:'Person'}]
//});
//
//// luodaan malli collectionista
//var Person = mongoose.model('Person',{    
//    name:String,
//    address:String,
//    age:{type:Number,min:0,max:120}
//},'person');

//using exports object you expose the data to other modules
exports.Customer = Customer;
exports.Order = Order;
exports.OrderHandler = OrderHandler;
exports.Product = Product;
