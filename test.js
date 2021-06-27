// const _ = {};

// _.filter = function (arr, cb) {
// 	// create a new array
// 	// loop through arr
// 	// check if cb returns true
// 	// if ture push into arr
// 	// return arr

// 	const storage = [];
// 	for (let i = 0; i > arr.length; i++) {
// 		if (cb(arr[i], i, arr) === true) {
// 			storage.push(arr[i]);
// 		}
// 	}
// 	return storage;
// };

// console.log(storage);

// method >> object
// function >> global window

// const obj = {
// 	name: "husien",
// 	play: function () {
// 		console.log(this);
// 	},
// };

// function namesz() {
// 	console.log(this);
// }

// namesz();

// const createTuple = (a, b, c, ...d) => {
// 	console.log(arguments);
// 	return [
// 		[a, c],
// 		[b, d],
// 	];
// };

// createTuple("it", "be", "could", "anyone", "no one");

const add = function (a, b = 2) {
	return console.log(a + b);
};

add(3, 25);
