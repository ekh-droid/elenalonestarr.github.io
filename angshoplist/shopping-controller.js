angular.module('myApp')


.controller('ShoppingListController',['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var shoplist  = $scope; 
	//shoplist.items is an array
	shoplist.items = ShoppingListItems.getList();

			//building an object, new item function
			shoplist.addItem = function(newItem) {

				shoplist.items.push({
					name: shoplist.newItem.name,
					qyt: shoplist.newItem.qty,
					priority: shoplist.newItem.priority
			});

			//clear form

			shoplist.newItem.name = "";
			shoplist.newItem.qty = "";
			shoplist.newItem.priority = "";
		};
			//this is the code for the remove button, takes away from the array
		shoplist.removeItem = function(item) {
			var removeItem = shoplist.item.indexOf(item);
			shoplist.item.splice(removeItem, 1);
		};

		//this function deletes entire list
		shoplist.removeAll = function() {
			shoplist.items = [];
			
		}

	}]);