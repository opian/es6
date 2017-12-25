window.onload = function () {
	const pi = 3.14;
	console.log('outside pi: ' + pi);
	function calcArea(r) {
		const pi = 10;
		console.log('inside pi: ' + pi);

		console.log('alan: ' + pi * r * r);
	}

	calcArea(3);
}