/*
 * @author Ashkar KM
 * directive for image upload Functionality
 * imgUpload
 */
 (function(){
    registerApp.directive('imgUpload',['CONSTANTS',function(CONSTANTS){
        return directive = {
            restrict :'E',
            scope:{
                model   : '='
            },
            templateUrl : CONSTANTS.TEMPLATE_PATH.IMAGE_UPLOAD,
            link : function(scope,element,attr){
                var readURL = function(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            angular.element('.profile-pic').attr('src', e.target.result);
                            scope.model = e.target.result;
                        }
                    
                        reader.readAsDataURL(input.files[0]);
                    }
                }
            
                element.find(".file-upload").on('change', function(){
                    
                    readURL(this);
                });
            
                scope.clickUpload = function(){
                    element.find(".file-upload").click();
                }
            }
        }
    }])
})()
