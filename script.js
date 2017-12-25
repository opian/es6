window.onload = function () {
// New String Methods
	//repeat
	//startsWith
	//endsWith
	//includes 
	var mesaj = `Lorem impsum dolor sit amed`;
	console.log( mesaj.repeat(5));
	console.log(mesaj.startsWith('Lore'));
	console.log('startsWith baslangicNoktasi');
	console.log(mesaj.startsWith('sum',9));
	console.log('endsWith')
	console.log(mesaj.endsWith('amed'));
	console.log('endsWith bitisNoktasi')
	console.log(mesaj.endsWith('sit', mesaj.length-5));
	console.log('include')
	console.log(mesaj.includes('impsum'));

}