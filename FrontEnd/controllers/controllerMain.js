main_module.controller('controllerMain',function($scope,factoryClient){
			
	factoryClient.getSignedInUser(function setNavBarData(signedInUser)
    {	
		$scope.navbarData = {		
			urls:['#/adminorders','#/neworders','#/searchorders','#/addnewproduct','#/allproducts'],
			texts:['My Orders','New Orders','Search Orders','Add New Product','All Products'],
        	classes:['','','','','active'],
			user:signedInUser
		}
	});      
});