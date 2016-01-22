main_module.controller('controllerAdminSignIn',function($scope,factoryAdmin,$location){
        
    $scope.loginClicked = function()
    {        
        console.log("Sign in pressed");
                     
        var waitPromise = factoryAdminLogin.signIn(temp);
        //wait the response from server
        waitPromise.then(
            function(data)
            {                                               
                $location.path('/adminorders');            
            },
            function error(data)
            {        
                console.log("Admin not found!");
            });
    }   
   
});