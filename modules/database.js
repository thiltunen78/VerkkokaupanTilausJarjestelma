var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

//configure mongodb
var db_name = 'verkkokauppa';
var mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;

//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}

mongoose.connect(mongodb_connection_string,connectionStatus);

function connectionStatus(err,ok)
{    
    if(err)
        console.log(err.message);        
    else
        console.log("Connected to mongodb database!");    
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
    password:String,
    
    orders:[{type:mongoose.Schema.Types.ObjectId,ref:'Order'}] // table of order ids      
});

var productSchema = new mongoose.Schema({    
    artist:String,
    album:String,
    price:Number, // price is in cents (for example 123 == 1.23€)
    description:String,
    mediaType:String,
	mediaTypeShort:String,
    genre:String,
	imageFileName:String,
    removed:Boolean
});

productSchema.plugin(mongoosePaginate);
var Product = mongoose.model('Product',  productSchema); 

exports.Customer = Customer;
exports.Order = Order;
exports.OrderHandler = OrderHandler;
exports.Product = Product;
