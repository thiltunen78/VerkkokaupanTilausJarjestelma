main_module.controller('controllerSignIn',function($scope,factoryClient,$location,Flash){
        
    $scope.signInClicked = function()
    { 
        var signInData = {
            email:$scope.user,
            password:$scope.pass
        }
        
        var waitPromise = factoryClient.signIn(signInData);
    
        waitPromise.then(function(data)
        {                                               
        	$location.path('/');            
        },
        function error(data)
        {        
			Flash.create('danger', 'Wrong username or password!', 'custom-class');                
        });
    }   
   
});