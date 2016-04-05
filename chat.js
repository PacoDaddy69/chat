$(document).ready(function() {

	var fbRef = new Firebase("https://dazzling-heat-8742.firebaseio.com/");

	$("#form").submit(function(event) {
		event.preventDefault();
		console.log("submitted");
		var message = $("#message").val();
		fbRef.child('messages').push(message);
		$("#message").val('');
	});

	fbRef.child('messages').on('child_added', function(snapshot) {
		var message = snapshot.val();
		$('#messages').append('<li>' + message + '</li>');
	});

});