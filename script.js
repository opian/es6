window.onload = function () {
	//Sets
	var names = new Set();
	names.add('Yamtar');
	console.log(names);
	names.add('Frodo baggins').add('Sauron').add('Aragorn').add('Sauron');
	//values must be uniq. So sauron ll not be in the output
	console.log(names);
	console.log('---Size');
	console.log(names.size);
	console.log('---Delete');
	sonuc = names.delete('Aragorn');
	//sonuc bool 
	console.log(names);
	console.log(sonuc);
	console.log("--Clear");
	names.clear();
	console.log(names);
	names.add('galadriel').add('arwen').add('balrog');
	console.log('--has');
	console.log(names.has('arwen'));//true

///////////////////////

	var places = ['isengard', 'anduin', 'pelennor', 'rivendell','isengard','anduin'];//tekrarlar var
	var setPlaces = new Set(places); // repetitions ll gonna fly away.
	console.log(places);
	console.log(setPlaces);	
	places = [...setPlaces];
	console.log(places);

}
