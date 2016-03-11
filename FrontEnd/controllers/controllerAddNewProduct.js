main_module.controller('controllerAddNewProduct',function($scope,factoryAdmin,$location,Flash){
	
	$scope.inputArtist = "";
    $scope.inputAlbum = "";
	$scope.selectMediaType = "Compact Disc";
	$scope.selectGenre = "Rock";
	$scope.inputPrice = "";
	$scope.inputImage = "";
	$scope.textareaDescription = "";
	
	factoryAdmin.getSignedInUser(function setNavBarData(signedInUser)
    { 	
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
		
		console.log(product);
		
		if((product.artist.length === 0) ||
			(product.album.length === 0) ||
			(product.mediaType.length === 0) ||
			(product.genre.length === 0) ||
			(product.price.length === 0) ||
			//(product.image.length === 0) ||
			(product.description.length === 0))
		{
			Flash.create('warning', "Please fill all the fields!", 'custom-class');
			return;
		}
		
        $('#buttonAdd').attr("disabled", true);
				
        var waitPromise = factoryAdmin.addProduct(product);
    
        waitPromise.then(function(data)
        {                                               
        	$scope.inputArtist = "";
            $scope.inputAlbum = "";
			$scope.selectMediaType = "Compact Disc";
			$scope.selectGenre = "Rock";
			$scope.inputPrice = "";
			$scope.inputImage = "";
			$scope.textareaDescription = "";
			
			$('#buttonAdd').attr("disabled", false);
			
			Flash.create('success', "Product added succesfully", 'custom-class');
        },
        function error(data)
        {        
			$('#buttonAdd').attr("disabled", false);
			
			Flash.create('danger', "Error adding product", 'custom-class');                
        });
    }   
});