var main_module = angular.module('main_module',['ngRoute','ngResource','flash','ngFileUpload']);

//check if user is logged in or not. this function is used in the router below in resolve attribute.
function loginRequired($q,$resource,$location)
{ 
    //Create a promise    
    var deferred = $q.defer();
        
    $resource('/customer/isLogged').query().$promise.then(function success()
	{    
        //mark the promise to be solved (or resolved)
        deferred.resolve();
        
        return deferred;
        
    },function fail()
	{        
        //mark the promise to be failed
        deferred.reject();
        
        //go to sign in page
        $location.path('/login');
        
        return deferred;    
    });    
}

//check if admin is logged in or not. this function is used in the router below in resolve attribute.
function adminLoginRequired($q,$resource,$location)
{ 
    //Create a promise    
    var deferred = $q.defer();
        
    $resource('/orderhandler/isLogged').query().$promise.then(function success()
	{    
        //mark the promise to be solved (or resolved)
        deferred.resolve();
        
        return deferred;
        
    },function fail()
	{        
        //mark the promise to be failed
        deferred.reject();
        
        //go to admin sign in page
        $location.path('/admin');
        
        return deferred;    
    });    
}

main_module.config(function($routeProvider){
    
    $routeProvider.when('/',{
      
        templateUrl:'main.html',
        controller:'controllerMain'
        
    }).when('/product',{
        
        templateUrl:'product.html',
        controller:'controllerProduct'        
        
    }).when('/shoppingcart',{
        
        templateUrl:'shoppingCart.html',
        controller:'controllerShoppingCart'
        
    }).when('/login',{
        
        templateUrl:'signIn.html',
        controller:'controllerSignIn'
        
    }).when('/createaccount',{
        
        templateUrl:'createAccount.html',
        controller:'controllerCreateAccount'
        
    }).when('/account',{
        
        templateUrl:'account.html',
        controller:'controllerAccount',
        resolve:{loginRequired:loginRequired}
        
    }).when('/accountsettings',{
        
        templateUrl:'accountSettings.html',
        controller:'controllerAccountSettings',
        resolve:{loginRequired:loginRequired}
        
    }).when('/admin',{
        
        templateUrl:'adminSignIn.html',
        controller:'controllerAdminSignIn'
        
    }).when('/createadmin',{
        
        templateUrl:'createAdmin.html',
        controller:'controllerCreateAdmin'
        
    }).when('/adminorders',{
        
        templateUrl:'adminOrders.html',
        controller:'controllerAdminOrders',
        resolve:{loginRequired:adminLoginRequired}
        
    }).when('/neworders',{
        
        templateUrl:'newOrders.html',
        controller:'controllerNewOrders',
        resolve:{loginRequired:adminLoginRequired}
        
    }).when('/searchorders',{
        
        templateUrl:'searchOrders.html',
        controller:'controllerSearchOrders',
        resolve:{loginRequired:adminLoginRequired}
        
    }).when('/addnewproduct',{
        
        templateUrl:'addNewProduct.html',
        controller:'controllerAddNewProduct',
        resolve:{loginRequired:adminLoginRequired}
        
    }).when('/allproducts',{
        
        templateUrl:'allProducts.html',
        controller:'controllerAllProducts',
        resolve:{loginRequired:adminLoginRequired}
        
    });
});