var main_module = angular.module('main_module',['ngRoute']);

main_module.config(function($routeProvider){
    
    $routeProvider./*when('/',{
      
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
        controller:'controllerAccount'
        
    }).when('/accountsettings',{
        
        templateUrl:'accountSettings.html',
        controller:'controllerAccountSettings'
        
    }).*/when('/admin',{
        
        templateUrl:'adminSignIn.html',
        controller:'controllerAdminSignIn'
        
    }).when('/createadmin',{
        
        templateUrl:'createAdmin.html',
        controller:'controllerCreateAdmin'
        
    })/*.when('/adminorders',{
        
        templateUrl:'adminOrders.html',
        controller:'controllerAdminOrders'
        
    }).when('/neworders',{
        
        templateUrl:'newOrders.html',
        controller:'controllerNewOrders'
        
    }).when('/searchorders',{
        
        templateUrl:'searchOrders.html',
        controller:'controllerSearchOrders'
        
    }).when('/addnewproduct',{
        
        templateUrl:'addNewProduct.html',
        controller:'controllerAddNewProduct'
        
    }).when('/allproducts',{
        
        templateUrl:'allProducts.html',
        controller:'controllerAllProducts'
        
    })*/;
});