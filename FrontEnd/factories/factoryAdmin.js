main_module.factory('factoryAdmin',function($resource)
{    
    var factory = {};
	
	factory.signedInUser = null;
	factory.allProductsArray = [];
				
	factory.getSignedInUser = function(setNavBarData)
	{		    
		if(!factory.signedInUser)
		{
			$resource('/orderhandler/isLogged').query().$promise.then(function success()
			{
				var resource = $resource('/orderhandler/signedinorderhandler',{},{'get':{method:'GET'}});
				resource.query().$promise.then(function(data)
				{
					factory.signedInUser = data[0];	
					setNavBarData(factory.signedInUser);    

				},function(error)
				{                
					factory.signedInUser = "error";
					setNavBarData(factory.signedInUser);
				});
			});
		}
		else
		{			
			setNavBarData(factory.signedInUser);
		}    	  		
	}
        
    factory.signIn = function(data)
    {		
        var req = $resource('/orderhandler/signinorderhandler',{},{'post':{method:'POST'}});
        return req.post(data).$promise;        
    }
       
    factory.register = function(data)
	{                   
        var req = $resource('/orderhandler/registerorderhandler',{},{'post':{method:'POST'}});            
        return req.post(data).$promise;        
    }
	
	factory.addProduct = function(data)
	{                   
		factory.allProductsArray = [];
		
        var req = $resource('/product/addproduct',{},{'post':{method:'POST'}});            
        return req.post(data).$promise;        
    }
	
	factory.getAllProducts = function(setAllProducts)	
	{
		if(factory.allProductsArray.length === 0)
		{
            var resource = $resource('/product/getproducts',{},{'get':{method:'GET'}});
            resource.query().$promise.then(function(data)
			{                
            	factory.allProductsArray = data;
              	setAllProducts(factory.allProductsArray);    
                
            },function(error)
			{                
                factory.allProductsArray = [];
                setAllProducts(factory.allProductsArray);
            });
        }
        else
		{            
            setAllProducts(factory.allProductsArray);
        }	
	}
	
	factory.removeProducts = function(data)
	{   
		factory.allProductsArray = [];
		
        var resource = $resource('/product/removeproduct',{},{'delete':{method:'DELETE'}});
        return resource.delete(data).$promise;
    }	
        
    return factory;
});