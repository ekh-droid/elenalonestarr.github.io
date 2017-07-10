angular.module('myApp')
//this service implements the .factory service method - 201 appplication
.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
			return items;

	}

	return {
		getList: getList
	};
});