// Assignment code here

// // Variables for characters used in password
// var randomCharacterFunction = {
//   upper: upperRandom,
//   lower: lowerRandom,
//   number: numberRandom,
//   symbol: symbolRandom
// }

// // Random Upper Character Function
// function upperRandom() {
//   var upperChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   console.log(upperChar);
//   return upperChar;
// }

// // Random Lower Character Function
// function lowerRandom() {
//   var lowerChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   console.log(lowerChar);
//   return lowerChar;
// }

// // Random Numeric Character Function
// function numberRandom() {
//   var numericChar = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   console.log(numericChar);
//   return numericChar;
// }

// // Random Symbol Character Function
// function symbolRandom() {
//   var symbolChar = symbolCharList[Math.floor(Math.random() * symbolCharList.length)];
//   console.log(symbolChar);
//   return symbolChar;
// }

// How long would you like your password to be? Must be between 8 and 128 characters.
function generatePassword(upper, lower, number, symbol, lengthFromInput) {
  var lengthFromInput = window.prompt("How long would you like your password to be? All passwords must be between 8 and 128 characters. Please enter that number below.");
  
  if (lengthFromInput >= 8 && lengthFromInput <= 128) {
    charList = '';
    window.alert("Your password will be " + lengthFromInput + " characters long.");
    
    // Would you like to include uppercase characters?
    var promptUpper = window.confirm("Would you like to include uppercase characters?");
    if (promptUpper === true) {
      window.alert("Uppercase characters are included!");
      for (i = 97; i <= 122; i++) {
        var upperCharList = '';
        upperCharList += String.fromCharCode(i);
        charList += upperCharList;
      }
    } else {
      window.alert("Uppercase characters are NOT included.");
    }
    // Would you like to include lowercase characters?
    var promptLower = window.confirm("Would you like to include lowercase characters?");
    if (promptLower === true) {
      window.alert("Lowercase characters are included!");
      for (i = 65; i <= 91; i++) {
        var lowerCharList = '';
        lowerCharList += String.fromCharCode(i);
        charList += lowerCharList;
      }
    } else {
      window.alert("Lowercase characters are NOT included.")
    }
    // Would you like to include numeric characters?
    var promptNumber = window.confirm("Would you like to include numeric characters?");
    if (promptNumber === true) {
      window.alert("Numeric characters are included!");
      for (i = 48; i <= 58; i++) {
        var numberCharList = '';
        numberCharList += String.fromCharCode(i);
        charList += numberCharList;
      }
    } else {
      window.alert("Numeric characters are NOT included.");
    }
    //  Would you like to include special characters?
    var promptSymbol = window.confirm("Would you like to include special characters?");
    if (promptSymbol === true) {
      window.alert("Symbolic characters are included!");
      var symbolCharList = String.fromCharCode(32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126);
      charList += symbolCharList;
    } else {
      window.alert("Symbolic characters are NOT included.");
    }  

    for (var i = 0; i < lengthFromInput; i++) {
      var password = charList[Math.floor(Math.random() * charList.length)];
    }

    password = generatePassword();

  } else {
    window.alert("You did not enter a numeric value within the guidelines. Please try again in the following prompt.")
    console.log("You did NOT follow the directions for password length.");
    generatePassword();
  }

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
