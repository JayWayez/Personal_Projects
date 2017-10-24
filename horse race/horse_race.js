$(document).ready(initializeGame);

var top_speed;
var stamina = true;
var recovery = 

var horses = [
	{ Name: horse_1, stamina: true, recovery: , position: 0 }
	{ Name: horse_2, stamina: true, recovery: , position: 0 }
	{ Name: horse_3, stamina: true, recovery: , position: 0 }
];

function initializeGame() {
	roll_speed();
}

function roll_speed() {
	if (stamina = true){
		function roll_top_speed(){
			top_speed = (Math.floor(Math.random) * 7) + 1;
			console.log(top_speed);
	} else {
		function roll_min_speed() {
			top_speed = Math.floor(Math.random) * 4;
			console.log(top_speed)	
		}
	}
}
}



//breed_a;

// var horse {
// 	top_speed: top_speed,
// 	stamina:
// 	recovery:
// 	}
// }