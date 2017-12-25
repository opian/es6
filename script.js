window.onload = function () {
	var x = 10;
	var y = 20;
	if (x > 5) {
		let x = 5;
		var y = 40;
		console.log('x inside: ' + x);
		console.log('y inside: ' + y);
	}
	console.log('x outside: ' + x);
	console.log('y outside: ' + y);
}