main_module.controller('controllerProduct',function($scope,factoryClient){
	
	$scope.breadcrumbData = {		
				ids:['home'],
				texts:['Home']
				}		
	
	factoryClient.getSignedInUser(function setNavBarData(signedInUser)
    {		
		$scope.navbarData = {			
			user:signedInUser
		}
	});
	
});