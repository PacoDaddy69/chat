$(document).ready(function() {

	var clicks = 0;
	var name;
	var player;

	var setup = function (player, other) {
		fbRef.child(player + 'Clicks').on('value', function(snapshot) {
				clicks = snapshot.val();
				$('#clicks').text(clicks);
				if (clicks > 1100) {
					$("#winner").show();
					fbRef.child('winner').set(true);
				}
			});
			fbRef.child(other + 'Clicks').on('value', function(snapshot) {
				clicks2 = snapshot.val();
				$('#clicks2').text(clicks2);
			});

			$('#cookie').click(function() {
				clicks = clicks + 1;
				$('#clicks').text(clicks);
				fbRef.child(player + 'Clicks').set(clicks);
			});
	}

	console.log("Loaded");
	$("#winner").hide();
	$('.game').hide();
	

	var fbRef = new Firebase("https://dazzling-heat-8742.firebaseio.com/");

	$('#player1').click(function() {
		name = "Player 1";
		$("#name").text(name);
		player = "player1";
		$('.buttons').hide();
		$('.game').show();

		setup(player, 'player2');
	});

	$('#player2').click(function() {
		name = "Player 2";
		$("#name").text(name);
		player = "player2";
		$('.buttons').hide();
		$('.game').show();

		setup(player, 'player1');
	});

	
	

	

	// $('#reset').click(function() {
	// 	clicks = 0;
	// 	fbRef.child('clicks').set(0);
	// 	fbRef.child('winner').set(false);
	// 	$("#winner").hide();
	// 	$('#clicks').text(clicks);
	// })

});

