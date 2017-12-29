window.onload = function () {
//Generators
function* gen(){
	var x = yield 'peaR';
	var y = yield 'banaNa';
	var z = yield 'appLe';
	return x + y + z ;
}
var myGen = gen();
console.log(myGen.next());
console.log(myGen.next(10));
console.log(myGen.next(20));
console.log(myGen.next(30));

/*02
function* gen(){
	yield 'peaR';
	yield 'banaNa';
	yield 'appLe';
	return "all done";
}
var myGen = gen();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
*/

/* 01
function* gen(){
	yield console.log('peaR');
	yield console.log('banaNa');
	yield console.log('appLe');
	console.log("all done")
}
var myGen = gen();
myGen.next();
myGen.next();
myGen.next();
myGen.next();
*/

}
