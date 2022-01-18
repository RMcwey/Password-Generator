// Assignment Code
var generateBtn = document.querySelector("#generate");
// This is the main function that will generate the randomized password.
function generatePassword () {
// First, I had to create a variable "password" that would be able to change.
  var password = "";
  // Next I needed to make an array that would contain all of the possible characters.
  // I have added two sets of numbers so that their probability almost guarantees that they will always be selected.
  const charList = { 
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "01234567890123456789",
    symbols: "!@#$%^&,.{[]}()*-=+?><;:",
  };
// Here, I focused on creating the prompts that would define the parameters of the generated password.
// I added in a lot of fail safes so that the program would be able to be used without refreshing the page.
  let confLt = window.prompt("How long would you like your password?");
    if (!confLt) {
      window.alert("Please input a number");
      return password;  
    } else if (isNaN(confLt)) {
      window.alert("Must be a number");
      return password;
    } else if (confLt < 8 || confLt > 128) {
      window.alert("Please choose between 8-128");
      return password;
    } else {
      var conflc = confirm("Would you like to use lower-case letters?");
      var confup = confirm("Would you like to use upper-case?");
      var confnum = confirm("Would you like to use numbers?");
      var confsy = confirm("Would you like to use symbols?");
    };
    // This is simply another failsafe to make sure that the program is re-runnable if nothing is selected.
    if (!conflc && !confup && !confnum && !confsy) {
      window.alert("Please choose at least one criteria");
      return password;
    };
    // This is another variable that will allow for us to put all of the selections by the user into 1 group.
    var possibleChars = "";

    // These are booleans that will add the user's selection to the new variable, "possibleChars".
    if (conflc) {
      possibleChars += charList.lowerCase
    };

    if (confup) {
      possibleChars += charList.upperCase
    };

    if (confnum) {
      possibleChars += charList.numbers
    }

    if (confsy) {
      possibleChars += charList.symbols
    }
    // This was merely something that I used to test if the new variable was working correctly with the booleans.
    console.log(possibleChars);
    

    // One thing that I have noticed is that occasionally, there will be no number selected since they are the lowest probability.
    // How can we make it so that numbers are always part of the password that is generated?
    // This is a for loop that uses an addition assignment to correctly generate a randomized password.
    for (let i = 0; i < confLt; i++) {
      password += possibleChars.charAt(Math.floor(Math.random () * possibleChars.length));
    };

  // This ends the program and returns the generated password.
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
