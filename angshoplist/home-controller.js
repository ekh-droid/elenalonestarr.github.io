angular.module('myApp')

//dependecy injection
.controller('HomeController',['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var home = $scope;
	home.items = ShoppingListItems.getList();

}]);