main_module.controller('controllerAdminSignIn',function($scope,factoryAdmin,$location,Flash){
        
    $scope.signInClicked = function()
    { 
        var signInData = {
            orderHandlerName:$scope.user,
            password:$scope.pass
        }
        
        var waitPromise = factoryAdmin.signIn(signInData);
    
        waitPromise.then(
            function(data)
            {                                               
                $location.path('/adminorders');            
            },
            function error(data)
            {        
				Flash.create('danger', 'Wrong username or password!', 'custom-class');                
            });
    }   
   
});