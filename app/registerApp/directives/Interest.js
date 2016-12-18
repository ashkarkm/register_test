/*
 * @author Ashkar KM
 * directive for hoby Functionality
 * hoby
 */
 (function(){
    registerApp.directive('interest',['CONSTANTS',function(CONSTANTS){
        return directive = {
            restrict :'E',
            scope:{
                model   : '='
            },
            templateUrl : CONSTANTS.TEMPLATE_PATH.HOBY,
            link : function(scope,element,attr){
                scope.interest = {};
                (function(interest){
                    if(scope.model.length){
                        interest.field = scope.model.join(",");
                        interest.array = interest.field.split(",");
                    }else{
                        
                        scope.model = interest.array;
                    }
                    
                    //function for input change
                    interest.change = function(){
                        if(interest.field){
                            interest.array = angular.copy(interest.field.split(","));
                            scope.model = interest.array;
                        }else{
                            interest.array = [];
                        }
                    }
                    //remove syntax
                    interest.close = function(item){
                        var index = interest.array.indexOf(item);
                        if(index > -1) {
                            interest.array.splice(index,1);
                            interest.field = angular.copy(interest.array.join(","));
                            scope.model = interest.array;
                        }
                    }
                })(scope.interest)
            }
        }
    }])
})();
