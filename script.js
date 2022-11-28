// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = prompt("Please enter password length")
  if (passwordLength < 10 || passwordLength > 64) {
    alert("The password length should be between 10 and 64")
    return "";
  }
  var hasLowercase = confirm("Do you want lowercase characters?")
  var hasUppercase = confirm("Do you want uppercase characters?")
  var hasNumbers = confirm("Do you want numbers?")
  var hasSymbols = confirm("Do you want symbols?")
  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSymbols) {
    alert("You must choose one")
    return "";
  }
  var chars = "";
  if (hasLowercase) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz"
  }


  if (hasUppercase) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (hasNumbers) {
    chars = chars + "0123456789"
  }
  if (hasSymbols) {
    chars = chars + "@%+\\'!#$^?:,)(}{[]~-_."
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');



  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);