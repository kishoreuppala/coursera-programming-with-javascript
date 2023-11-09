var clothes = [];
//Add 5 items to an empty array
clothes.push("Pants");
clothes.push("Shirts");
clothes.push("Inner Wear");
clothes.push("Saree");
clothes.push("Browse");
console.log(clothes);
//Remove last item from array
clothes.pop();
console.log(clothes);
clothes.push("Others");
console.log(clothes);
//show 3rd item from array
console.log(clothes[2]);

//Create Objects
var favCar = {};
//Add data to an empty object using dot notation
favCar.color = "green";
favCar.covertible = "true";
console.log("object: ",favCar);

//output
// [ 'Pants', 'Shirts', 'Inner Wear', 'Saree', 'Browse' ]
// [ 'Pants', 'Shirts', 'Inner Wear', 'Saree' ]
// [ 'Pants', 'Shirts', 'Inner Wear', 'Saree', 'Others' ]
// Inner Wear
// object:  { color: 'green', covertible: 'true' }