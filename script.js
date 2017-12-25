window.onload = function () {
	/*
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
	*/
	var items = document.getElementsByTagName('li');
	console.log(items);
	for (let i = 0; i < items.length; i++) {
		items[i].onclick = function(){
			console.log(i);
			//i degiskeni var keywrd ile tanimlandiginda 
			//dingu en bastan kuruldugu icin ekrAna
			//hep 4 yaziyur.
		}
	}
}