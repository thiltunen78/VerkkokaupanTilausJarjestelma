main_module.factory('factoryClient',function($resource)
{    
    var factory = {};
	
	factory.signedInUser = null;	
	factory.pageCount = 1;
	factory.currentBreadcrumbData = {ids:['home'], texts:['Home']};	
	factory.currentProduct = null;
	factory.breadcrumbLinkPressedFromProductPage = null;
	
	factory.setCurrentProduct = function(product)
	{
		factory.currentProduct = product;
	}
	
	factory.setCurrentBreadcrumbData = function(breadcrumbData)
	{
		factory.currentBreadcrumbData = breadcrumbData;
	}
	
	factory.getCurrentProduct = function()
	{
		return factory.currentProduct;
	}
	
	factory.getCurrentBreadcrumbData = function()
	{
		return factory.currentBreadcrumbData;
	}
	
	factory.setBreadcrumbLinkPressedFromProductPage = function(event)
	{
		factory.breadcrumbLinkPressedFromProductPage = event;
	}
	
	factory.getBreadcrumbLinkPressedFromProductPage = function()
	{
		var event = factory.breadcrumbLinkPressedFromProductPage;
		factory.breadcrumbLinkPressedFromProductPage = null;
		return event;
	}
	
	factory.getProducts = function(searchParams, setProducts)
	{		
		var resource = $resource('/product/getproducts',{},{'get':{method:'GET'}});
		resource.get(searchParams).$promise.then(function(data)
		{			
			if(data.pages == 0){
				//use existing page count information
				data.pages = factory.pageCount;
			}										
				
			//store page count information
			factory.pageCount = data.pages;			
				
			setProducts(data.docs, data.pages);    

		},function(error)
		{			
			setProducts([],1);
		});        
	}	
	
	factory.getSignedInUser = function(setNavBarData)
	{
		if(!factory.signedInUser)
		{
			var resource = $resource('/customer/isLogged',{},{'get':{method:'GET'}});
            resource.query().$promise.then(function(data)
			{					
				var resource2 = $resource('/customer/getcurrentcustomerdata',{},{'get':{method:'GET'}});
            	resource2.query().$promise.then(function(data)
				{
                	factory.signedInUser = data[0];
					setNavBarData(factory.signedInUser);
					
            	},function(error)
				{				
                	factory.signedInUser = null;
                	setNavBarData(factory.signedInUser);
            	});                
            },function(error)
			{				
                factory.signedInUser = null;
                setNavBarData(factory.signedInUser);
            });
		}
		else
		{
			setNavBarData(factory.signedInUser);
		}
	}	
        
    factory.signIn = function(data)
    {		
        var req = $resource('/customer/signincustomer',{},{'post':{method:'POST'}});
        return req.post(data).$promise;        
    }
       
    factory.register = function(data)
	{                   
        var req = $resource('/customer/registercustomer',{},{'post':{method:'POST'}});            
        return req.post(data).$promise;        
    }	
        
    return factory;
});