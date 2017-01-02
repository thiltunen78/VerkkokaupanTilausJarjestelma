main_module.controller('controllerMain',function($scope,factoryClient){
	
	$scope.breadcrumbData = {		
				ids:['home'],
				texts:['Home']
				}		
	
	$scope.products = [];
	$scope.pageCount = [];
	
	$scope.currentGenre = "";
	$scope.currentMediaType = "";
	$scope.currentPage = 0;
		
	getProducts = function(searchParams)
	{
		factoryClient.getProducts(searchParams, function setProducts(productArray,pageCount)
		{						
			$scope.products = productArray;	
			
			$scope.pageCount = [];
			
			for(var i=0;i<pageCount;i++){
				if($scope.currentPage == (i+1))
					$scope.pageCount.push({nr:i+1,class:'active'});
				else
					$scope.pageCount.push({nr:i+1,class:'disabled'});
			};		
		});
	}	
	
	factoryClient.getSignedInUser(function setNavBarData(signedInUser)
    {		
		$scope.navbarData = {			
			user:signedInUser
		}
	}); 
	
	$scope.showProductsFromGenre = function(event,pagenr)
	{		
		$scope.currentPage = pagenr;
		
		switch(event.currentTarget.id) {
			case 'home':
				$scope.breadcrumbData = {		
				ids:['home'],
				texts:['Home']
				}					
				getProducts({page:pagenr});
				$scope.currentGenre = "";
				$scope.currentMediaType = "";
				break;
    		case 'vinyl':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl'],
				texts:['Home','Vinyl Records']
				}
				getProducts({page:pagenr,mediaType:'Vinyl Record'});
				$scope.currentGenre = "";
				$scope.currentMediaType = "Vinyl Record";				
        		break;
    		case 'vinylRock':
				$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylRock'],
				texts:['Home','Vinyl Records','Rock']
				}        	
				getProducts({page:pagenr,genre: 'Rock',mediaType:'Vinyl Record'});
				$scope.currentGenre = "Rock";
				$scope.currentMediaType = "Vinyl Record";
        		break;				
			case 'vinylPop':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylPop'],
				texts:['Home','Vinyl Records','Pop']
				}
				getProducts({page:pagenr,genre: 'Pop',mediaType:'Vinyl Record'});
				$scope.currentGenre = "Pop";
				$scope.currentMediaType = "Vinyl Record";
        		break;   
			case 'vinylElectronic':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylElectronic'],
				texts:['Home','Vinyl Records','Electronic']
				}
				getProducts({page:pagenr,genre: 'Electronic',mediaType:'Vinyl Record'});
				$scope.currentGenre = "Electronic";
				$scope.currentMediaType = "Vinyl Record";
        		break;   
			case 'vinylHeavy':
        		$scope.breadcrumbData = {		
				ids:['home','vinyl','vinylHeavy'],
				texts:['Home','Vinyl Records','Heavy']
				}
				getProducts({page:pagenr,genre: 'Heavy',mediaType:'Vinyl Record'});
				$scope.currentGenre = "Heavy";
				$scope.currentMediaType = "Vinyl Record";
        		break;   
			case 'cd':
        		$scope.breadcrumbData = {		
				ids:['home','cd'],
				texts:['Home','Compact Discs']
				}
				getProducts({page:pagenr,mediaType:'Compact Disc'});
				$scope.currentGenre = "";
				$scope.currentMediaType = "Compact Disc";
        		break;
    		case 'cdRock':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdRock'],
				texts:['Home','Compact Discs','Rock']
				}
				getProducts({page:pagenr,genre: 'Rock',mediaType:'Compact Disc'});
				$scope.currentGenre = "Rock";
				$scope.currentMediaType = "Compact Disc";
        		break;
			case 'cdPop':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdPop'],
				texts:['Home','Compact Discs','Pop']
				}
				getProducts({page:pagenr,genre: 'Pop',mediaType:'Compact Disc'});
				$scope.currentGenre = "Pop";
				$scope.currentMediaType = "Compact Disc";
        		break;   
			case 'cdElectronic':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdElectronic'],
				texts:['Home','Compact Discs','Electronic']
				}
				getProducts({page:pagenr,genre: 'Electronic',mediaType:'Compact Disc'});
				$scope.currentGenre = "Electronic";
				$scope.currentMediaType = "Compact Disc";
        		break;   
			case 'cdHeavy':
        		$scope.breadcrumbData = {		
				ids:['home','cd','cdHeavy'],
				texts:['Home','Compact Discs','Heavy']
				}
				getProducts({page:pagenr,genre: 'Heavy',mediaType:'Compact Disc'});
				$scope.currentGenre = "Heavy";
				$scope.currentMediaType = "Compact Disc";
        		break;   
			default:				
				getProducts({page:pagenr,genre:$scope.currentGenre,mediaType:$scope.currentMediaType});				
		}
    }
	
	//show all products at the start	
	getProducts({page:1});
});