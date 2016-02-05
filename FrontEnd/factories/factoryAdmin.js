main_module.factory('factoryAdmin',function($resource){
    
    var factory = {};
        
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
        
    return factory;
});