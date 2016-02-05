main_module.directive('thAdminnavbar',function(){ 
    
    var directive = {};   
    directive.restrict = 'AE';
        
    directive.scope = {     
        navbarData:'='        
    }       
        
	directive.link = function(scope,elem,attrs){
         
    };
	
    directive.templateUrl = "/FrontEnd/directives/adminNavbar_directive_content.html";

    return directive;
});