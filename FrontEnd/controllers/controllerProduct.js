main_module.controller('controllerProduct',function($scope,factoryClient,$location){
			
	$scope.breadcrumbData = factoryClient.getCurrentBreadcrumbData();
	$scope.product = factoryClient.getCurrentProduct();
	
	factoryClient.getSignedInUser(function setNavBarData(signedInUser)
    {		
		$scope.navbarData = {			
			user:signedInUser
		}
	});
	
	$scope.showProductsFromGenre = function(event)
	{			
		console.log("Taalla");
		console.log(event);
		factoryClient.setBreadcrumbLinkPressedFromProductPage(event);
		$location.path('/'); // back to main page
	}
	
});