main_module.controller('controllerAllProducts',function($scope,factoryAdmin,$location,Flash){
	
	var removeArray = [];
	
	factoryAdmin.getSignedInUser(function setNavBarData(signedInUser)
    {	
		$scope.navbarData = {		
			urls:['#/adminorders','#/neworders','#/searchorders','#/addnewproduct','#/allproducts'],
			texts:['My Orders','New Orders','Search Orders','Add New Product','All Products'],
        	classes:['','','','','active'],
			user:signedInUser
		}
	});  
	
	factoryAdmin.getAllProducts(function setAllProducts(dataArray)
	{
		$scope.allProducts = dataArray;
				
		Sortable.init();
	});
	
	$scope.addToRemove = function($event,$index,id)
	{        
        //Check if item was selected
        if(event.target.checked)
		{            
            //Add the id to our remove array
            removeArray.push(id);
        }
        else
		{            
            //Remove if item was unchecked                        
            removeArray.splice(removeArray.indexOf(id,0),1);            
        }      
		
		console.log(removeArray);
    }    
  
    $scope.removeProducts = function()
	{
        //Nothing to remove
        if(removeArray.length === 0)
		{            
            Flash.create('warning', 'Nothing to remove!', 'custom-class');
        }
        else
		{            
            var data = {                
                forRemove:removeArray
            }
            
			if($scope.navbarData.user != "admin"){
				Flash.create('warning', 'Only user "admin" can remove products from the system!', 'custom-class');
				return;
			}
			
            factoryAdmin.removeProducts(data).then(function(data)
			{
            	factoryAdmin.getAllProducts(function setAllProducts(dataArray)
				{
					$scope.allProducts = dataArray;
					Sortable.init();
				}); 
				
				removeArray = [];
                
            },function(error)
			{                
                Flash.create('warning', 'Error in server!', 'custom-class');
				
				removeArray = [];
            });
        }
    }
});