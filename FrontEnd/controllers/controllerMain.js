main_module.controller('controllerMain',function($scope,factoryClient){
	
	$scope.breadcrumbData = null;
	
	factoryClient.getSignedInUser(function setNavBarData(signedInUser)
    {		
		$scope.navbarData = {			
			user:signedInUser
		}
	}); 
	
	$scope.showProductsFromGenre = function(event)
	{
        console.log(event.currentTarget.id);
		
		switch(event.currentTarget.id) {
    		case 'vinyl':
        		$scope.breadcrumbData = {		
				ids:['vinyl'],
				texts:['Vinyl Records']        	
				}
        		break;
    		case 'vinylRock':
				$scope.breadcrumbData = {		
				ids:['vinyl','vinylRock'],
				texts:['Vinyl Records','Rock']        	
				}        		
        		break;
			case 'vinylPop':
        		$scope.breadcrumbData = {		
				ids:['vinyl','vinylPop'],
				texts:['Vinyl Records','Pop']        	
				}
        		break;   
			case 'vinylElectronic':
        		$scope.breadcrumbData = {		
				ids:['vinyl','vinylElectronic'],
				texts:['Vinyl Records','Electronic']        	
				}
        		break;   
			case 'vinylHeavy':
        		$scope.breadcrumbData = {		
				ids:['vinyl','vinylHeavy'],
				texts:['Vinyl Records','Heavy']        	
				}
        		break;   
			case 'cd':
        		$scope.breadcrumbData = {		
				ids:['cd'],
				texts:['Compact Discs']        	
				}
        		break;
    		case 'cdRock':
        		$scope.breadcrumbData = {		
				ids:['cd','cdRock'],
				texts:['Compact Discs','Rock']        	
				}
        		break;
			case 'cdPop':
        		$scope.breadcrumbData = {		
				ids:['cd','cdPop'],
				texts:['Compact Discs','Pop']        	
				}
        		break;   
			case 'cdElectronic':
        		$scope.breadcrumbData = {		
				ids:['cd','cdElectronic'],
				texts:['Compact Discs','Electronic']        	
				}
        		break;   
			case 'cdHeavy':
        		$scope.breadcrumbData = {		
				ids:['cd','cdHeavy'],
				texts:['Compact Discs','Heavy']        	
				}
        		break;   
		}
    }
});