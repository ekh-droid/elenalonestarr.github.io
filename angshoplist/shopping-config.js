//is connecting from <html ng-app="MyApp">
//'ngRoute' is a service is built in Angular
// the square brakkets are refferring to a service that angular will include itno the application
var app = angular.module('myApp', ['ngRoute'])
//.config here is pulling info from ['ngRoute']	
	.config(['$routeProvider', function($routeProvider){
		//also using a callback function
			$routeProvider
			//this is going to build out some routes for a user when they reach my root
			//& where it'll navigate in the file, this case home.html

				.when('/', {
					templateUrl: "views/home.html"
				}).otherwise({
					redirectTo: '/home'
				})
				.when('/home', {
					templateUrl: "views/home.html",
					controller: "HomeController"
				})
				.when('/shopping-list', {
					templateUrl: "views/shopping-list.html",
					controller: "ShoppingListController",
					controllerAs: "shoplist"
				}).otherwise({
					redirectTo: "/home"
				});

	}]);

	
