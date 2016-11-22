main_module.controller('controllerCreateAccount',function($scope,factoryClient,$location,Flash){
        
    $scope.registerClicked = function()
    {          
        var registerData = {
			firstName:$scope.firstName,
			lastName:$scope.lastName,
            email:$scope.email,
            password:$scope.pass,
			address:$scope.address,
			postCode:$scope.postCode,
			phoneNumber:$scope.phoneNumber
        }
        
        var waitPromise = factoryClient.register(registerData);
        
        waitPromise.then(function(data)
        {                         
			Flash.create('success', 'Register succesfull!', 'custom-class');
            $location.path('/login');            
        },
        function error(data)
        {        
            Flash.create('danger', 'email is already registered. Please select another!', 'custom-class');
        });
    }   
   
});