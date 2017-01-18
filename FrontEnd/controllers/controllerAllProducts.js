main_module.controller('controllerAllProducts',function($scope,factoryAdmin,$location,Flash){
	
	var removeIdArray = [];
	var removeFileArray = [];
	
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
	
	$scope.addToRemove = function($event,$index,id,file)
	{       		
        //Check if item was selected
        if(event.target.checked)
		{            
            //Add id to remove array
            removeIdArray.push(id);
			//Add image file name to remove array
			if(file.length){
            	removeFileArray.push(file);
			}
        }
        else
		{            
            //Remove if item was unchecked                        
            removeIdArray.splice(removeIdArray.indexOf(id,0),1);
			if(file.length){
				removeFileArray.splice(removeFileArray.indexOf(file,0),1);
			}
        }      	
    }    
  
    $scope.removeProducts = function()
	{
        //Nothing to remove
        if(removeIdArray.length === 0)
		{            
            Flash.create('warning', 'Nothing to remove!', 'custom-class');
        }
        else
		{            
            var data = {                
                forRemoveIds:removeIdArray,
				forRemoveFiles:removeFileArray
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
				
				removeIdArray = [];
				removeFileArray = [];
                
            },function(error)
			{                
                Flash.create('warning', 'Error in server!', 'custom-class');
				
				removeIdArray = [];
				removeFileArray = [];
            });
        }
    }
});