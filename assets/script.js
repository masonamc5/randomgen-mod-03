// Assignment Code
var generateBtn = document.querySelector("#generate");

function start() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = ""

  const passwordLength = window.prompt('Please enter desired length of your password.');

  var symbols = confirm("Please select if you would like symbols in your password.")

  var uppercase = confirm("Please select if you would like uppercase letters in your password.")

  var lowercase = confirm("Please select if you would like lowercase letters in your password.")

  var numbers = confirm("Please select if you would like numbers in your password.")

  let answers = {
    passwordLength, uppercase, lowercase, symbols, numbers
  }

  if (answers.uppercase || answers.lowercase || answers.symbols || answers.numbers) {

    if (passwordLength !==null) {

      console.log(answers);

      generatePassword(answers);

    }

    console.log(symbols)
  }

  else {
    alert("Answer Ok to at least one question")
    start()
  }
}

generateBtn.addEventListener('click', start)

function generatePassword(answersObj) {
  console.log('generatePassword')
  let characters = ""
  if (answersObj.lowercase == true) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }

  if (answersObj.uppercase == true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (answersObj.symbols == true) {
    characters += "!@#$%^&*"
  }

  if (answersObj.numbers == true) {
    characters += "1234567890"
  }

  console.log(characters)
  answersObj.passwordLength = Number(answersObj.passwordLength);

  if (answersObj.passwordLength < 8 || answersObj.passwordLength > 128) {
    alert("enter a number between 8 and 128")
    passwordText.value = ""
  }

  let length = ""

  for (let i = 0; i < answersObj.passwordLength; i++) {
    let character = Math.floor(Math.random() * characters.length)

    console.log(characters[character])
    writePassword(characters[character])
  }

  return;
}

function writePassword(character) {
  var passwordText = document.querySelector("#password");
  passwordText.value += character;

  return;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)



















//when button is clicked show prompts for parameters
// show prompts for uppercase, lowercase, length 8-128, numeric, special characters
// once all prompt all answered 
//all prompts answered show the password
//generate random password with (math.random) length and all of the other parameters selected
//if not valid parameters show and alert

