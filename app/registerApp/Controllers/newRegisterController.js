/*
 * @ author Ashkar KM
 * Controller for New Registartion page
 * Registration.Controller.New
 */

(function(){
	registerApp.controller('Registration.Controller.New',['$scope','$location',function($scope,$location){
		$scope.profile	=	{};
		(function(profile){
			/*
			 * @ author Ashkar KM
			 * Function for navigating to create page
			 */
			profile.goToCreate = function() {
				$location.path('/new-registration')
			}
			profile.address		= '';
			profile.submitError	= false;
			profile.viewProfile	=	false;
			// init form values
			profile.form = {
				profile_image	:	'',
				first_name		:	'',
				last_name		:	'',
				age				:	'',
				email			:	'',
				telephone		:	'',
				comp_address1	:	'',
				comp_address2	:	'',
				home_address1	:	'',
				home_address2	:	'',
				country			:	'',
				state			:	'',
				interest		:	[],
				agree			:	false
			};
			// form data
			profile.patterns	=	/^[a-zA-Z]+$/;
			profile.slider_age = {
		        options: {
		            stepsArray: ['13-19','20-29','30-45','45 & Above'],
		            showTicksValues: true
		        }
		    };
			profile.formData	=	{
				address		:	[
					{name:'Home',id:1},
					{name:'Office',id:2}
				],
				country		:	{
					1:	{
						name:'India',country_id:2
					},
					2:{
						name:'Usa',country_id:1
					}
				},
				states:[
					{name:'Florida',state_id:201,country_id:1},
					{name:'New jersy',state_id:202,country_id:1},
					{name:'New York',state_id:203,country_id:1},
					{name:'California',state_id:204,country_id:1},
					{name:'Arunachal',state_id:101,country_id:2},
					{name:'Kerala',state_id:102,country_id:2},
					{name:'Karnataka',state_id:103,country_id:2},
					{name:'Jammu',state_id:104,country_id:2},
					{name:'Punjab',state_id:105,country_id:2},
					{name:'tamilnadu',state_id:106,country_id:2},
					{name:'Goa',state_id:10,country_id:27}
				]
			}

			//profile submit function
			profile.submit = function(valid){
				if(valid){
					
					if(profile.form.age && profile.form.profile_image && profile.form.interest.length){
						profile.viewProfile = true
						profile.submitError = false;
					}
					
				}else{
					profile.submitError = true;
				}
			}
			//edit profile
			profile.edit = function(){
				profile.viewProfile	=	false;
			}
			//age case
			profile.age = function(expression){
				
				switch(expression) {
				    case '13-19':
				        return 'Above 13'
				        break;
				    case '20-29':
				        return 'Above 20'
				        break;
				    case '30-45':
				        return 'Above 30'
				        break;
				    case '45 & Above':
				        return 'Above 45'
				        break;
				    default:''
				        
				}
			}
		})($scope.profile)
	}])
})()