main_module.factory('factoryClient',function($resource)
{    
    var factory = {};
	
	factory.signedInUser = null;	
					
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