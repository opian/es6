window.onload = function () {
// Object literals Enchancements
	var name = "Crystal";
	var belt = "Black";

	//old
	var ninja = {
		name: name,
		belt: belt
	};
	console.log(ninja.name);


	//Ench
	var ninjaEs6 = {
		name, belt,
		//it ll grap values from variables

		//old func declr.
		chop: function (x) {
			console.log(`You chopped the enemy ${x} times`);
		},
		
		//similiar func with es6
		hit(y){
			console.log(`you hit the enemy ${y} times`);
		},
		
	}
	console.log(ninjaEs6.name);
	ninjaEs6.chop(4);
	ninjaEs6.hit(1200);	
	

}