main_module.controller('controllerCreateAdmin',function($scope,factoryAdmin,$location){
        
    $scope.registerClicked = function()
    {        
        console.log("register in pressed");
                     
        var waitPromise = factoryAdminRegister.login(temp);
        //wait the response from server
        waitPromise.then(
            function(data)
            {                                               
                $location.path('/adminorders');            
            },
            function error(data)
            {        
                console.log("error!");
            });
    }   
   
});