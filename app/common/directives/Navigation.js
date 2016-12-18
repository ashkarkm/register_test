/*
 * @author Ashkar KM
 * directive for navigation Functionality
 * navigation
 */
common.directive('navigation',['CONSTANTS',function(CONSTANTS){
	return directive = {
		restrict :'E',
		templateUrl : CONSTANTS.TEMPLATE_PATH.NAVIGATION,
		link : function(scope,element,attr){

		}
	}
}])