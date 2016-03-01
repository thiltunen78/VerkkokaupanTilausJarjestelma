main_module.controller('controllerSearchOrders',function($scope,factoryAdmin,$location,Flash){

	var waitPromise = factoryAdmin.getSignedInUser();
	var signedInUser = "";
	
	waitPromise.then(function(data)
    {                                               
    	signedInUser = data[0];       
	
		$scope.navbarData = {		
			urls:['#/adminorders','#/neworders','#/searchorders','#/addnewproduct','#/allproducts'],
			texts:['My Orders','New Orders','Search Orders','Add New Product','All Products'],
        	classes:['','','active','',''],
			user:signedInUser
		} 
	});   
});