var app = angular.module('myApp', ['ngRoute'])
//.config here is pulling info from ['ngRoute']	
	.config(['$routeProvider', function($routeProvider){
		//also using a callback function
			$routeProvider
			//this is going to build out some routes for a user when they reach my root
			//& where it'll navigate in the file, this case home.html

				.when('/', {
					templateUrl: "views/bio.html"
				}).otherwise({
					redirectTo: '/home'
				})
				.when('/home', {
					templateUrl: "views/bio.html",
					controller: "HomeController"
				})
				.when('/shopping-list', {
					templateUrl: "views/project.html",
					controller: "ProjectController",
					controllerAs: "projectcontrol"
				}).otherwise({
					redirectTo: "/home"
				});

	}]);
