main_module.factory('factoryAdmin',function($resource){
    
    var factory = {};
        
    factory.login = function(data)
    {        
        console.log(data);
        
        var req = $resource('/orderhandler/loginorderhandler',{},{'post':{method:'POST'}});
        
        return req.post(data).$promise;        
    }
        
    return factory;
});