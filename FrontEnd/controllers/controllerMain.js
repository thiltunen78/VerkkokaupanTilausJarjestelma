main_module.controller('controllerMain',function($scope,factoryClient){
	
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
	
	$scope.showProductsFromGenre = function(event)
	{
        console.log(event.currentTarget.id);
		
		switch(event.currentTarget.id) {
    		case 'vinyl':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl'],
				texts:['Home','Vinyl Records']
				}
        		break;
    		case 'vinylRock':
				$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylRock'],
				texts:['Home','Vinyl Records','Rock']
				}        		
        		break;
			case 'vinylPop':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylPop'],
				texts:['Home','Vinyl Records','Pop']
				}
        		break;   
			case 'vinylElectronic':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylElectronic'],
				texts:['Home','Vinyl Records','Electronic']
				}
        		break;   
			case 'vinylHeavy':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylHeavy'],
				texts:['Home','Vinyl Records','Heavy']
				}
        		break;   
			case 'cd':
        		$scope.breadcrumbData = {		
				ids:['home','cd'],
				texts:['Home','Compact Discs']
				}
        		break;
    		case 'cdRock':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdRock'],
				texts:['Home','Compact Discs','Rock']
				}
        		break;
			case 'cdPop':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdPop'],
				texts:['Home','Compact Discs','Pop']
				}
        		break;   
			case 'cdElectronic':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdElectronic'],
				texts:['Home','Compact Discs','Electronic']
				}
        		break;   
			case 'cdHeavy':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdHeavy'],
				texts:['Home','Compact Discs','Heavy']
				}
        		break;   
			default:
				$scope.breadcrumbData = {		
				ids:['home'],
				texts:['Home']
				}				
		}
    }
});