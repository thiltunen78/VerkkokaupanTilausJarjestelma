main_module.controller('controllerAddNewProduct',function($scope,factoryAdmin,$location,Flash){

	var waitPromise = factoryAdmin.getSignedInUser();
	var signedInUser = "";
	
	waitPromise.then(function(data)
    {                                               
    	signedInUser = data[0];       
	
		$scope.navbarData = {		
			urls:['#/adminorders','#/neworders','#/searchorders','#/addnewproduct','#/allproducts'],
			texts:['My Orders','New Orders','Search Orders','Add New Product','All Products'],
        	classes:['','','','active',''],
			user:signedInUser
		}   
	}); 
	
	$scope.addProductClicked = function()
    { 
        var product = {
            artist:$scope.inputArtist,
            album:$scope.inputAlbum,
			mediaType:$scope.selectMediaType,
			genre:$scope.selectGenre,
			price:$scope.inputPrice,
			image:$scope.inputImage,
			description:$scope.textareaDescription,
			removed:false
        }
        
        var waitPromise = factoryAdmin.addProduct(product);
    
        waitPromise.then(function(data)
        {                                               
        	$scope.inputArtist = "";
            $scope.inputAlbum = "";
			$scope.selectMediaType = "";
			$scope.selectGenre = "";
			$scope.inputPrice = "";
			$scope.inputImage = "";
			$scope.textareaDescription = "";
			
			Flash.create('success', "Product added succesfully", 'custom-class');
        },
        function error(data)
        {        
			Flash.create('danger', "Error adding product", 'custom-class');                
        });
    }   
});