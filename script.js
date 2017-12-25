window.onload = function () {
//Spread Operator
	var meats = ['ham', 'salami','bacon'];
	console.log(meats);
	console.log(...meats);

	console.log('-------');
	var nums1 = [1,2,3,4];
	var nums2 = [5,6,7,8,9];
	var nums  = [...nums1,...nums2];
	console.log('-------');
	console.log(...nums1, 4,3,2,1);
	console.log(nums);
}