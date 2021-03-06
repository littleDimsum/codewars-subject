// Description:

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"


// mine
function reverseWords(str) {
  return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
}



// top vote solution
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}