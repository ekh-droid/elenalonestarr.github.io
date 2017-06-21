//making variables for add friend section
var $friends = $('#friends');
var $name = $('name');
var $age = $('#age');


//friend template is using the mustache template
//great teaching moment for the button id-{{yeah}}
//

var friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

//function that calls the data to be added into the template, by assigned variables and html elements
function addFriend(friend){
		$friends.append(Mustache.render(friendTemplate, friend));

};



$(document).ready(function(){

		
		$.ajax({
			type: 'GET',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			//On successful get request use a for each loop to iterate through the array of objects recieved from the get request
			success: function(friends) {
				//for each
				$.each(friends, function(i, friend){
				//Calls addfriend and passes currennt friend object as a parameterr
						addFriend(friend)
			})

		}
});

	//when the element with the add-friend id is clicked perform the designated function
		$('#add-friend').on('click', function(){
			//creates friend object, applies #friends, #name, #age, to assigned strings
			var friend = {
				name: $name.val(),
				age: $age.val()
			};
	//aAJAX POST FUNCTION- click the button with id ass-friend & then pass it to the api
			$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend) {
				addFriend(newFriend);
				},
			error: function(){
				alert('error saving order');
			}

		})
		 

});
        //performs a function the friends variable
		$friends.delegate('.remove', 'click', function(){
		// creats an object that points to the li element it is nested in
			var $li = $(this).closest('li');
			//AJAX DELETE function - click the .remove class button and the id identifies what to delete
			$.ajax({
				type: 'DELETE',
				url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
				success: function(){
					//'fade out' literally fading the block of code selected by the DELETE api
					$li.fadeOut(300, function(){
						$(this).remove();
					//if successful, this will remove & fade out the selected object generated

					});
				}
			});

		});

});