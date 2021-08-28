// Assignment code here

// Variables for characters used in password
// Random Upper Character Function
function upperRandom() {
  var upperChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  console.log(upperChar);
  return upperChar;
}

// Random Lower Character Function
function lowerRandom() {
  var lowerChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  console.log(lowerChar);
  return lowerChar;
}

// Random Numeric Character Function
function numberRandom() {
  var numericChar = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  console.log(numericChar);
  return numericChar;
}

// Random Symbol Character Function
function symbolRandom() {
  var symbolCharList = String.fromCharCode(32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126);
  var symbolChar = symbolCharList[Math.floor(Math.random() * symbolCharList.length)];
  console.log(symbolChar);
  return symbolChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
