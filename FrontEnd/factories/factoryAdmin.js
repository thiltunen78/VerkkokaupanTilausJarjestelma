main_module.factory('factoryAdmin',function($resource){
    
    var factory = {};
			
	factory.getSignedInUser = function()
	{
		var req = $resource('/orderhandler/signedinorderhandler',{},{'get':{method:'GET'}});		
		return req.query().$promise;
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
        var req = $resource('/product/addproduct',{},{'post':{method:'POST'}});            
        return req.post(data).$promise;        
    }
        
    return factory;
});