main_module.controller('controllerCreateAdmin',function($scope,factoryAdmin,$location,Flash){
        
    $scope.registerClicked = function()
    {          
        var registerData = {
            orderHandlerName:$scope.user,
            password:$scope.pass
        }
        
        var waitPromise = factoryAdmin.register(registerData);
        
        waitPromise.then(
            function(data)
            {                         
				Flash.create('success', 'Register succesfull!', 'custom-class');
                $location.path('/admin');            
            },
            function error(data)
            {        
                Flash.create('danger', 'Username is in use. Please select another!', 'custom-class');
            });
    }   
   
});