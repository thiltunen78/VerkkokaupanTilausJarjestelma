main_module.controller('controllerMain',function($scope,factoryClient){
	
	$scope.breadcrumbData = {		
				ids:['home'],
				texts:['Home']
				}		
	
	$scope.products = null;
	
	getAllProducts = function()
	{
		factoryClient.getAllProducts(function setAllProducts(dataArray)
		{						
			$scope.products = dataArray;			
		});
	}	
	
	getProductsByGenreAndType = function(searchParams)
	{
		factoryClient.getProductsByGenreAndType(searchParams, function setAllProducts(dataArray)
		{						
			$scope.products = dataArray;			
		});
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
				getProductsByGenreAndType({mediaType:'Vinyl Record'});
        		break;
    		case 'vinylRock':
				$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylRock'],
				texts:['Home','Vinyl Records','Rock']
				}        	
				getProductsByGenreAndType({genre: 'Rock',mediaType:'Vinyl Record'});
        		break;				
			case 'vinylPop':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylPop'],
				texts:['Home','Vinyl Records','Pop']
				}
				getProductsByGenreAndType({genre: 'Pop',mediaType:'Vinyl Record'});
        		break;   
			case 'vinylElectronic':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylElectronic'],
				texts:['Home','Vinyl Records','Electronic']
				}
				getProductsByGenreAndType({genre: 'Electronic',mediaType:'Vinyl Record'});
        		break;   
			case 'vinylHeavy':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylHeavy'],
				texts:['Home','Vinyl Records','Heavy']
				}
				getProductsByGenreAndType({genre: 'Heavy',mediaType:'Vinyl Record'});
        		break;   
			case 'cd':
        		$scope.breadcrumbData = {		
				ids:['home','cd'],
				texts:['Home','Compact Discs']
				}
				getProductsByGenreAndType({mediaType:'Compact Disc'});
        		break;
    		case 'cdRock':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdRock'],
				texts:['Home','Compact Discs','Rock']
				}
				getProductsByGenreAndType({genre: 'Rock',mediaType:'Compact Disc'});
        		break;
			case 'cdPop':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdPop'],
				texts:['Home','Compact Discs','Pop']
				}
				getProductsByGenreAndType({genre: 'Pop',mediaType:'Compact Disc'});
        		break;   
			case 'cdElectronic':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdElectronic'],
				texts:['Home','Compact Discs','Electronic']
				}
				getProductsByGenreAndType({genre: 'Electronic',mediaType:'Compact Disc'});
        		break;   
			case 'cdHeavy':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdHeavy'],
				texts:['Home','Compact Discs','Heavy']
				}
				getProductsByGenreAndType({genre: 'Heavy',mediaType:'Compact Disc'});
        		break;   
			default:
				$scope.breadcrumbData = {		
				ids:['home'],
				texts:['Home']
				}	
				getAllProducts();				
		}
    }
	
	//show all products at the start
	getAllProducts();
});