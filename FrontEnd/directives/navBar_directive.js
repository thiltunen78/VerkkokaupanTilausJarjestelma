main_module.directive('thNavbar',function(){ 
    
    var directive = {};   
    directive.restrict = 'AE';
        
    directive.scope = {     
        navbarData:'='        
    }       
        
	directive.link = function(scope,elem,attrs){
         
    };
	
    directive.templateUrl = "/FrontEnd/directives/navbar_directive_content.html";

    return directive;
});