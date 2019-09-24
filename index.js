var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var numbers = "0123456789".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var choiceArrays = [];

// Asks to choose a length of the password between 8 and 128 characters
function questions () {
    var length = prompt("Choose a password length between 8 and 128 characters:")
        if (length < 8 || length > 128) {
            alert("You must choose a number between 8 and 128.")
        } else if (isNaN(length)) {
            alert("You must choose a number.")
        }

    var useNum = confirm("Would you like your password to contain numbers?")
        if (useNum = true) {
            choiceArrays = choiceArrays + numbers;
        }

    var useSpe = confirm("Would you like your password to contain special characters (e.g. %, @, >, etc?)")
    if (useSpe = true) {
        choiceArrays = choiceArrays + special;
    }

    var useUpp = confirm("Would you like your password to contain upper case letters?")
    if (useUpp = true) {
        choiceArrays = choiceArrays + upperCase;
    }

    var useLow = confirm("Would you like your password to contain lower case letters?") 
    if (useLow = true) {
        choiceArrays = choiceArrays + lowerCase;
    }


    document.getElementById("password").innerHTML = genPass (length, choiceArrays)

    }

    function genPass (len, arr) {
        var password = ['']
        for (var i = 0; i < len; i++) {
            var random = Math.floor(Math.random() * arr.length)
            password = password + arr[random];
        } 
        return password
    }


// Function to pull a random piece out of an array
// function genPass (len, arr) {
//     var password = ['']
//     for (var i = 0; i < len; i++) {
//         var random = Math.floor(Math.random() * arr.length)
//         password = password + arr[random];
//     } 
//     return password
// }

// console.log(lowerCase)