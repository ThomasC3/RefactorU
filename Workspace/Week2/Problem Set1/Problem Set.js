
// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. 
// You can assume that words in the input string will be separated by only one space.

function letterCapitalize (str) { 

    var array = str.split('');

    for (var i = 0; i <= array.length;) {

        if (array[i - 1] == " ") {
            array[i] = array[i].toUpperCase();
        } else if (i == 0) {
            array[i] = array[i].toUpperCase();
        }

        i++;
    }
    str = array.join('');
    return str;
}



letterCapitalize("hello world, hello world!");

// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
// You can assume that words in the input string will be separated by only one space.
function WordCount(str) { 
  return str.split(" ").length;
}

console.log(WordCount("hello world"));

// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.
// Input = 19        Output = true
// Input = 110       Output = false

function PrimeTime( num ) {
	for ( var i = 2; i < num; i++ ) {
		if ( num % i == 0 )
			return false;
	}
	
	return true;
}