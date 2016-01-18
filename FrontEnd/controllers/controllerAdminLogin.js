main_module.controller('controllerAdminLogin',function($scope,factoryAdminLogin,$location){
    
    //var user = $scope.user;
    //$scope.pass = "halituli";
    
    //This is called when login button is pressed in parial_login.html
    $scope.signInClicked = function(){
        
        console.log("login pressed");
        
        var temp = {
            username:$scope.user,
            password:$scope.pass
        }
        
        var waitPromise = loginFactory.startLogin(temp);
        //wait the response from server
        waitPromise.then(function(data){
           
            //code inside this block will be called when success response from server receives
            
            //store json web token
            sessionStorage['token'] = data.secret;
            console.log(data.secret);
            
            $location.path('/list');
            
        },function error(data){        
            $('.note').text('Wrong username or password!');   
            Flash.create('danger', 'Wrong username or password!', 'custom-class');
        });
    }
    
    $scope.registerClicked = function(){
        
        console.log("register pressed");
        
        var temp = {
            username:$scope.user,
            password:$scope.pass
        }
        
        var waitPromise = loginFactory.startRegister(temp);
        //wait the response from server
        waitPromise.then(function(data){
           
            //code inside this block will be called when success response from server receives
            
            $('.note').text('Register succesfull');
            alert('Register succesfull');
            Flash.create('success', 'Register succesfull!', 'custom-class');
            
        },function error(data){        
            $('.note').text('Username is in use. Please select another'); 
            alert('Username is in use. Please select another');
            Flash.create('danger', 'Username is in use. Please select another!', 'custom-class');
        });
    }
});