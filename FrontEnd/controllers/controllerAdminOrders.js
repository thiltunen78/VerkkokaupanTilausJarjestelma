main_module.controller('controllerAdminOrders',function($scope,factoryAdmin,$location,Flash){

	$scope.navbarData = {
		
		urls:['/logout','#/delete','#/add'],
		texts:['Logout','Delete','Add'],
        classes:['','','active']
	}      
   
});