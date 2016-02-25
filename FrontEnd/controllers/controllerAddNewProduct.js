main_module.controller('controllerAddNewProduct',function($scope,factoryAdmin,$location,Flash){

	var signedInUser = factoryAdmin.getSignedInUser();
	
	$scope.navbarData = {
		
		urls:['#/adminorders','#/neworders','#/searchorders','#/addnewproduct','#/allproducts'],
		texts:['My Orders','New Orders','Search Orders','Add New Product','All Products'],
        classes:['','','','active',''],
		user:signedInUser
	}      
   
});