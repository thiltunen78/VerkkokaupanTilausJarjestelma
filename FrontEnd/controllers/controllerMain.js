main_module.controller('controllerMain',function($scope,factoryClient){
			
	factoryClient.getSignedInUser(function setNavBarData(signedInUser)
    {		
		$scope.navbarData = {			
			user:signedInUser
		}
	});      
});