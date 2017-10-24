var finishline = 20;
var horse_names = ["Seabiscuit", "J.K.A.", "Seattle Slew", "Patty Cake", "Trigger"];
var horses = [];
var counter = 1;

function random_num_gen (max, min) {
	if (min === undefined) { // min is optional. we are giving it a default value of 0.
		min = 0;
	}
	return Math.floor(Math.random() * (max - min)) + min; // Math is an object that calls the function of "random" ex: Math.random, people.name, etc.
}

function Horse (name) { //object makers are should be capitalized.
	this.name = name;
	this.position = 0;
	this.speed = random_num_gen(5,1);
	this.stamina = 10;
	this.recovery = random_num_gen(8,2);
	this.min_stamina = random_num_gen(5,2);
	this.start_race = function () {
		var race = setInterval (function () { // when you put in content, you have to use anonymous function.
			this.stamina -= random_num_gen(2,1);
			if (this.stamina <= this.min_stamina) {
				this.stamina += this.recovery;
				console.log(this.name + " is too tired")
			} else {
				this.position += this.speed;
				console.log(this.name + " dashes forward")
			}
			if (this.position >= finishline) {
				console.error(this.name + " was horse #" + counter + " to finish.");
				counter++;
				clearInterval(race);
			}
		}.bind(this), 2000); // binds the this.stamina to the horse instead of the window. interval is happening to window.
	};
}

function make_horses (array) {
	for (var i = 0; i < array.length; i++) {
		horses.push(new Horse(array[i]));
	}
}

function begin_race (array) {
	for (var i = 0; i < array.length; i++) {
		array[i].start_race();
	}
}

var horse_1 = new Horse();
var horse_2 = new Horse();

// console.log(
// 	horse_1, 
// 	horse_2
// );  

// min = min || 0  
//----- 
//this is same as setting min value above. 
//since min = undefined = falsey, 
//it will take 2nd value as default, even though it's falsey as well.

