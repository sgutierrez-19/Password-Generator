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
// var useSpe = confirm("Would you like your password to contain special characters (e.g. %, @, >, etc?)")
// var useUpp = confirm("Would you like your password to contain upper case letters?")
// var useLow = confirm("Would you like your password to contain lower case letters?") 


function genPass (len, arr) {
    var arrchoice = arr[0]
    for (var i = 0; i < len; i++) {
        var random = Math.floor(Math.random() * arrchoice.length)
        return arrchoice[random]
    }
}

console.log(genPass(8, numbers))

// if (useNum == false && useSpe == false && useUpp == false && useLow == false) {
//     alert("Your password must contain one of the preceeding items.  Please try again.")
// }
