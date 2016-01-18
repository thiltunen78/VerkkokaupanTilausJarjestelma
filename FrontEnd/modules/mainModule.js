var main_module = angular.module('main_module',['ngRoute']);

main_module.config(function($routeProvider){
    
    $routeProvider./*when('/',{
      
        templateUrl:'partial_mainView.html',
        controller:'controllerMainView'
        
    }).when('/product',{
        
        templateUrl:'partial_productView.html',
        controller:'controllerProductView'        
        
    }).when('/shoppingcart',{
        
        templateUrl:'partial_shoppingCartView.html',
        controller:'controllerShoppingCartView'
        
    }).when('/login',{
        
        templateUrl:'partial_loginView.html',
        controller:'controllerLoginView'
        
    }).when('/createaccount',{
        
        templateUrl:'partial_createAccountView.html',
        controller:'controllerCreateAccountView'
        
    }).when('/account',{
        
        templateUrl:'partial_accountView.html',
        controller:'controllerAccountView'
        
    }).when('/accountsettings',{
        
        templateUrl:'partial_accountSettingsView.html',
        controller:'controllerAccountSettingsView'
        
    }).*/when('/admin',{
        
        templateUrl:'partial_adminLoginView.html',
        controller:'controllerAdminLoginView'
        
    })/*.when('/createadmin',{
        
        templateUrl:'partial_createAdminView.html',
        controller:'controllerCreateAdminView'
        
    }).when('/adminorders',{
        
        templateUrl:'partial_adminOrdersView.html',
        controller:'controllerAdminOrdersView'
        
    }).when('/neworders',{
        
        templateUrl:'partial_newOrdersView.html',
        controller:'controllerNewOrdersView'
        
    }).when('/searchorders',{
        
        templateUrl:'partial_searchOrdersView.html',
        controller:'controllerSearchOrdersView'
        
    }).when('/addnewproduct',{
        
        templateUrl:'partial_addNewProductView.html',
        controller:'controllerAddNewProductView'
        
    }).when('/allproducts',{
        
        templateUrl:'partial_allProductsView.html',
        controller:'controllerAllProductsView'
        
    })*/;
});