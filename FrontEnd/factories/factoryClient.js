main_module.factory('factoryClient',function($resource)
{    
    var factory = {};
	
	factory.signedInUser = null;	
	factory.productsArray = [];
	factory.allProductsArray = [];	
	
	factory.getProductsByGenreAndType = function(searchParams, setProducts)
	{		
		var resource = $resource('/product/getproductsbygenreandtype',{},{'get':{method:'GET'}});
		resource.query(searchParams).$promise.then(function(data)
		{                
			factory.productsArray = data;
			setProducts(factory.productsArray);    

		},function(error)
		{                
			factory.allProductsArray = [];
			setProducts(factory.allProductsArray);
		});        
	}
		
	factory.getAllProducts = function(setProducts)
	{
		if(factory.allProductsArray.length === 0)
		{
            var resource = $resource('/product/getallproducts',{},{'get':{method:'GET'}});
            resource.query().$promise.then(function(data)
			{                
            	factory.allProductsArray = data;
              	setProducts(factory.allProductsArray);    
                
            },function(error)
			{                
                factory.allProductsArray = [];
                setProducts(factory.allProductsArray);
            });
        }
        else
		{            
            setProducts(factory.allProductsArray);
        }	
	}	
	
	factory.getSignedInUser = function(setNavBarData)
	{
		if(!factory.signedInUser)
		{
			var resource = $resource('/customer/isLogged',{},{'get':{method:'GET'}});
            resource.query().$promise.then(function(data)
			{					
				var resource2 = $resource('/customer/getcurrentcustomerdata',{},{'get':{method:'GET'}});
            	resource2.query().$promise.then(function(data)
				{
                	factory.signedInUser = data[0];
					setNavBarData(factory.signedInUser);
					
            	},function(error)
				{				
                	factory.signedInUser = null;
                	setNavBarData(factory.signedInUser);
            	});                
            },function(error)
			{				
                factory.signedInUser = null;
                setNavBarData(factory.signedInUser);
            });
		}
		else
		{
			setNavBarData(factory.signedInUser);
		}
	}	
        
    factory.signIn = function(data)
    {		
        var req = $resource('/customer/signincustomer',{},{'post':{method:'POST'}});
        return req.post(data).$promise;        
    }
       
    factory.register = function(data)
	{                   
        var req = $resource('/customer/registercustomer',{},{'post':{method:'POST'}});            
        return req.post(data).$promise;        
    }	
        
    return factory;
});