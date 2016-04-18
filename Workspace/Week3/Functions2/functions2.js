$(document).on('ready', function() {

    
});

// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var getName = function(obj){
	return obj.name
}
console.log("This is function 1")
console.log(getName({ name: 'Luisa', age: 25}))

// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

var totalLetters = function(arr){
	var value = 0
	for (var i =0; i < arr.length; i++){
	value += arr[i].length;
	}
	return value
} 
console.log("This is function 2")
console.log(totalLetters(['javascript', 'is', 'awesome']))

// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

var keyValue = function(key, value){
    var obj = {}
    return obj[key] = value
}
console.log ("This is function 3")
console.log(keyValue('city', 'Denver'))

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

var negativeIndex = function(arr, number){

	return arr[arr.length + number]

}
console.log("This is function 4")
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))

// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

var removeM = function(str){
	var arr = []
	for (var i=0; i <str.length; i++){
		if (str[i] !== 'm'){
			arr += str[i]
		}
	}
	return arr
}
console.log("This is function 5")
console.log(removeM("family, memory, mammals"))

// version 2

var removeM = function(str){
	var value = ""
	for (var i =0; i < str.length; i++){
		if (str[i] !== 'm'){
			value += str[i]
			//value = str[i] + value
		}
	}
	return value
}
console.log(removeM("family, memory, mammals"))

// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print: md a is 10 b is 20 c is 30
// printObject({ firstName: 'pork', lastName: 'chops' }) should print: md firstName is pork lastName is chops
// var fruits = "Banana";
// fruits.split(" ");
// console.log(fruits)

var printObject = function(object){
	for (var key in object) {
		console.log(key + " is " + object[key]);
	}
};
console.log("This is function 6")
printObject({ firstName: 'pork', lastName: 'chops' });

// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

var vowels = function(string){
	var vowels = {
		a : 'a',
		e : 'e',
		i : 'i',
		o : 'o',
		u : 'u',
	}
	var stringArray = string.split('');
	var output = stringArray.filter(function(element){
		return element.toLowerCase() in vowels;
	})
	return output;
};

console.log(vowels('What evil odd ducks!'));

// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false

var twins = function(array) {
	var test = 0

	for (var i = 0; i < (array.length ); i += 2) {
		if (array[i] === array[ i + 1 ]) {
			test++
		}
	}
	return test === array.length/2;
};

console.log(twins(['a', 'a', 'b', 'b']));

// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

var or = function(array){

	// var test = array.filter( function(element) {
	// 	return element;
	// });

	// return test.length > 0

	for (var i = 0; i < array.length; i++) {
		if (array[i] === true) {
			return 'Exercise 9 : Array [' + array + '] contains true = ' + true;
		}
	};return 'Exercise 9 : Array [' + array + '] contains true = ' + false;
};

console.log(or([false, false, false]));


// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var unique = function(array){
	var obj = {}
	for (var i = 0; i < array.length; i++) {
		obj[array[i]] =  null;
	}; return Object.keys(obj);
};

console.log(unique(['todd', 'avery', 'maria', 'avery']));
