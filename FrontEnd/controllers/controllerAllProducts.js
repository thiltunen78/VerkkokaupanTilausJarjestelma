main_module.controller('controllerAllProducts',function($scope,factoryAdmin,$location,Flash){

	$scope.navbarData = {
		
		urls:['#/adminorders','#/neworders','#/searchorders','#/addnewproduct','#/allproducts'],
		texts:['My Orders','New Orders','Search Orders','Add New Product','All Products'],
        classes:['','','','','active']
	}      
   
});