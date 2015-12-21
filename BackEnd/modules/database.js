var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/verkkokauppa',connectionStatus);

function connectionStatus(err,ok)
{    
    if(err)
        console.log(err.message);        
    else
        console.log("Connected to database!");    
}

var Customer = mongoose.model('Customer',{
    customerId:{type:Number,unique:true},
    firstName:String,
    lastName:String,
    address:String,
    postCode:String,
    phoneNumber:String,
    email:{type:String,unique:true}, // used to log in
    password:String,                 // used to log in
    
    orders:[{type:mongoose.Schema.Types.ObjectId,ref:'Order'}] // table of order ids   
});

var Order = mongoose.model('Order',{    
    orderId:{type:Number,unique:true},
    createDate:Date,
    status:String,
    
    products:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}], // table of product ids    
});

var OrderHandler = mongoose.model('OrderHandler',{    
    orderHandlerName:{type:String,unique:true},
    
    orders:[{type:mongoose.Schema.Types.ObjectId,ref:'Order'}] // table of order ids      
});

var Product = mongoose.model('Product',{    
    artist:String,
    album:String,
    price:Number, // price is in cents (for example 123 == 1.23€)
    description:String,
    mediaType:String,
    genre:String  
});

exports.Customer = Customer;
exports.Order = Order;
exports.OrderHandler = OrderHandler;
exports.Product = Product;
