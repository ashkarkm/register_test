/*
 * @ author Ashkar KM
 * Controller for register page
 * Registration.Controller.Register
 */

(function(){
	registerApp.controller('Registration.Controller.Register',['$scope','$location',function($scope,$location){
		$scope.register	=	{};
		(function(register){
			/*
			 * @ author Ashkar KM
			 * Function for navigating to create page
			 */
			register.goToCreate = function() {
				$location.path('/new-registration')
			}
		})($scope.register)
	}])
})()