main_module.factory('factoryAdmin',function($resource){
    
    var factory = {};
	var signedInUser = "";
	
	factory.getSignedInUser = function()
	{
		return signedInUser;
	}
        
    factory.signIn = function(data)
    {         
		signedInUser = data.orderHandlerName;
		
        var req = $resource('/orderhandler/signinorderhandler',{},{'post':{method:'POST'}});
        return req.post(data).$promise;        
    }
       
    factory.register = function(data)
	{                   
        var req = $resource('/orderhandler/registerorderhandler',{},{'post':{method:'POST'}});            
        return req.post(data).$promise;        
    }
        
    return factory;
});