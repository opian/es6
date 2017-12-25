window.onload = function () {
	// default parameters

	function log(num=10) {
		console.log(num);
	}
	log();

	/*
		yukaridaki kullanimda log() fonksiyonuna deger
		gelirse, gelen degeri, gelmezse 10 degerini yazacak.

	*/

	function logNinja(name="Ryu", belt = "Black", age = "23"){
		console.log('Hi my names '+name+' and my belt is: '+belt+
		' and my age is: '+age+'');
	}
	logNinja();
	logNinja('ahmet','kirmizi','32');
}