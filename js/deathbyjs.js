/*eslint-env browser*/

//STEP 1
/*1.	Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string*/
//function alphOrder(str) {
//    return str.split('').sort().join('');
//}
//window.console.log(alphOrder("tacosdefrjol"));



//STEP 2
/*2.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.*/

/*
function strCapital(str) {
	var arr1 = str.split(' '), arr2 = [];
	for (var i = 0; i < arr1.length; i++) {
		arr2.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));
	}
		return arr2.join(' ');
}
console.log(strCapital("how many quick brown foxes can jump this high"));
*/



//STEP 3
/*3.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5*/

/*
function vowelCount(str) {
	var matchedVowels = str.match(/(a|o|i|e|u)/gi);
	var count = matchedVowels.length;
	return count;
}
window.console.log(vowelCount("The quick brown fox"));
*/


//STEP 4
/*
4.	Write a JavaScript function that generates a string id (specified length) of random characters.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
*/
//function makeid(l){
//    var text = "";
//    var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//for(var i=0; i < l; i++ ) {
//   text += list.charAt(Math.floor(Math.random() * list.length));
//} 
//return text;
//}
//console.log(makeid(5));


//STEP 5
/*5.	Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"*/
//
//function longest_Country_Name(countries) {
//	var longest = "";
//	for (i = 0; i < countries.length; i++) {
//		if (longest.length < countries[i].length) {
//			longest = countries[i];
//		}
//	}
//	return longest;	
//}
//console.log(longest_Country_Name(["Australia", "Germany", "United States of America"]));