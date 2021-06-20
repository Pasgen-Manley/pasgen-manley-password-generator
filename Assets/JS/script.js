// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];   

// Input variables for the prompts
var confirmLength = "";
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialChar;

function generatePassword() {
  var confirmLength = prompt("How long would you like your password to be? Password must be between 8 and 128 characters");

  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Hey! Password must be between 8 and 128 character! Please try again :)");
    var confirmLength = prompt("How long would you like your password to be? Password must be between 8 and 128 characters");
  }

  alert("You have chosen " + confirmLength + " characters.");

  var confirmNumber = confirm("Click OK if you would like to include numbers");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase alphabetical characters");
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase alphabetical characters");
  var confirmSpecialChar = confirm("Click OK if you would like to include special characters");
    while (!confirmNumber && !confirmLowerCase && !confirmUpperCase && !confirmSpecialChar) {
      alert("Please select at least one(1) parameter");
      var confirmNumber = confirm("Click OK if you would like to include numbers");
      var confirmLowerCase = confirm("Click OK if you would like to include lowercase alphabetical characters");
      var confirmUpperCase = confirm("Click OK if you would like to include uppercase alphabetical characters");
      var confirmSpecialChar = confirm("Click OK if you would like to include special characters");
    }

  var userPassword = []

  if (confirmNumber) {
    userPassword = userPassword.concat(number);
  }

  if (confirmLowerCase) {
    userPassword = userPassword.concat(lowercaseChar);
  }

  if (confirmUpperCase) {
    userPassword = userPassword.concat(uppercaseChar);
  }

  if (confirmSpecialChar) {
    userPassword = userPassword.concat(specialChar);
  }
  
  console.log(userPassword);

  var randomisedpassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomisedpassword = randomisedpassword + userPassword[Math.floor(Math.random() * userPassword.length)];
    console.log(randomisedpassword);
  }
  return randomisedpassword;

}


function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
