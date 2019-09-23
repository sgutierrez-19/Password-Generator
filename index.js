var special = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"]
var numbers = ["0123456789"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]

// Asks to choose a length of the password between 8 and 128 characters
var length = prompt("Choose a password length between 8 and 128 characters:")
    if (length < 8 || length > 128) {
        alert("You must choose a number between 8 and 128.")
    } else if (isNaN(length)) {
        alert("You must choose a number.")
    }

var useNum = confirm("Would you like your password to contain numbers?")
var useSpe = confirm("Would you like your password to contain special characters (e.g. %, @, >, etc?)")
var useUpp = confirm("Would you like your password to contain upper case letters?")
var useLow = confirm("Would you like your password to contain lower case letters?") 

// Function to pull a random piece out of an array
function genPass (len, arr) {
    var arrChoice = arr[0]
    var password = ['']
    for (var i = 0; i < len; i++) {
        var random = Math.floor(Math.random() * arrChoice.length)
        password = password + arrChoice[random];
    } 
    return password
}


document.getElementById("password").innerHTML = genPass(length, numbers)