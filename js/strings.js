/*eslint-env browser*/

//STEP 1
/*1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.*/

//*var userName = window.prompt("What is your name?");
//window.alert(userName.length);

//STEP 2
/* 2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.*/

/*var userName = window.prompt("What is your name?");
var userNumber = window.prompt("Pick a number from 1-" + userName.length);
window.alert(userName.charAt(userNumber-1));*/


//STEP 3
/*3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.*/

//var userName = window.prompt("What is your name?");
//var userLastn = window.prompt("What is your last name?");
//window.alert("Your name is : " + userName.concat(userLastn)); 


//STEP 4
/*4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.*/
 
/*var text = "The quick brown fox jumps over the lazy dog";
window.alert(text.match(/fox/g));*/

//STEP 5
/*5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.*/

//var text = "The quick brown fox jumps over the lazy dog";
//window.alert(text.lastIndexOf("fox"));


//STEP 6
/*6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.*/

//var text = "The quick brown fox jumps over the lazy dog";
//var userName = window.prompt("What is your full name?");
//window.alert(text.replace("the lazy dog", userName));

//STEP 7

/*7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.*/
//var text = "The quick brown fox jumps over the lazy dog";
//var userWord = window.prompt("Type a word with 3-5 letters")
//window.alert(text.match(userWord));


//STEP 8
/*8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string*/
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(30,43);
//window.alert(new_string.toUpperCase());


//STEP 9
/*9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.*/

//var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//window.alert(text.trim().toLowerCase());


//STEP 10
/*10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.*/

//var text = "the quick brown fox jumps over the lazy dog";
//window.alert(text.slice(0,1).toUpperCase() + text.slice(1));

