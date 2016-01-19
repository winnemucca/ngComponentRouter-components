// (function() {
// 		'use strict;'
// 		angular
// 			.module('componentTutorial')
// 			.value('$routerRootComponent', 'HomeComponentOptions')
// 			.component('Home',HomeComponentOptions);

// 			function defaultCanActivateRouterHook(componentName) {
// 	            return function() {
// 	                console.log("${componentName}: $canActivate called with", componentName);
// 	                return true;
// 	            }
//         	}
        
// 	        function defaultRouterHooks(ctrlName) {
// 	            return {
// 	                $routerOnActivate: function(next, prev) {
// 	                    console.log( next, prev);
// 	                },
// 	                $routerOnDeactivate: function (next, prev)  {
// 	                    console.log( next, prev);
// 	                },              
// 	                $routerOnReuse: function (next, prev) {
// 	                    console.log(next, prev);
// 	                },      
// 	                $routerCanReuse: function (next, prev)  {
// 	                    console.log( next, prev);
// 	                    return true;
// 	                },             
// 	                $routerCanDeactivate: function (next, prev) {
// 	                    console.log( next, prev);
// 	                    return true
// 	                }
// 	            }
// 	        }
        
// 			var HomeComponentOptions = {
				
// 				bindings: {  
// 					title: '@'
// 				},
// 				$canActivate: defaultCanActivateRouterHook('DempAppComponent'),

// 				templateUrl: 'app/home/home.html',
// 				controller: HomeController	    
// 			}


// 			function HomeController ($router) {
// 				$router.config([
// 					{path: '/home...', name: 'Home', useAsDefault: true}
// 				]);
// 			}
		
// 	})();