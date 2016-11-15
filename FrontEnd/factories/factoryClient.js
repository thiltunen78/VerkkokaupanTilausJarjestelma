main_module.factory('factoryClient',function($resource)
{    
    var factory = {};
	
	factory.signedInUser = "";
					
	factory.getSignedInUser = function(setNavBarData)
	{
		if(factory.signedInUser.length === 0)
		{
			var resource = $resource('/customer/signedincustomer',{},{'get':{method:'GET'}});
            resource.query().$promise.then(function(data)
			{                
            	factory.signedInUser = data[0];
              	setNavBarData(factory.signedInUser);    
                
            },function(error)
			{                
                factory.signedInUser = "";
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