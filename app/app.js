var common		=	angular.module('common',[]),
	registerApp	=	angular.module('registerApp', ['ngRoute','common','rzModule']);

registerApp.constant('CONSTANTS',{
	TEMPLATE_PATH		:	{
		REGISTER_PAGE		:	'templates/register/register-page.html',
		EDIT_FORM_PAGE		:	'templates/edit-form/edit-form.html',
		VIEW_PAGE			:	'templates/view/view-registration.html',
		REGISTERD_PAGE		:	'templates/registerd/registerd-page.html',
		NAVIGATION			:	'templates/common/navigation.html',
		IMAGE_UPLOAD		:	'templates/edit-form/image-upload.html',
		HOBY				:	'templates/edit-form/interest.html'
	} 
});
registerApp.config(['$routeProvider','CONSTANTS', function($route,CONSTANTS) {
	$route.
		when('/register',{
			controller	:	'Registration.Controller.Register',
			templateUrl	:	CONSTANTS.TEMPLATE_PATH.REGISTER_PAGE
		}).
		when('/new-registration',{
			controller	:	'Registration.Controller.New',
			templateUrl	:	CONSTANTS.TEMPLATE_PATH.EDIT_FORM_PAGE
		})
		.otherwise({redirectTo:'register'})
}])