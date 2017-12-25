window.onload = function () {
// Arrow functions
	var ninjaGreeting = function(){
		console.log("hiyaaaaaa!"); 
	};

	ninjaGreeting();

	//es6
	var ninjaSelami = ()=> console.log('hiyaaaaaa');
	ninjaSelami();

	var ninjaMsg = (name, age)=> console.log(`${age} yrs old ninja ${name} says hiyaaa`);
	ninjaMsg("kimilKimilNinja",3);

	var tarkan = {
		name: "yamtar",
		dogra(x){
			//var _this = this;
			window.setInterval(()=>{
				if (x>0) {
					console.log(this.name + " dusmani dogradi.");
					x--;
				}
			}, 1000)
		}
	}

	tarkan.dogra(5);

}