var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var choiceArrays = [];

// Asks to choose a length of the password between 8 and 128 characters
function questions () {
    var length = prompt("Choose a password length between 8 and 128 characters:");
        if (length < 8 || length > 128) {
            alert("You must choose a number between 8 and 128.");
        } else if (isNaN(length)) {
            alert("You must choose a number.");
        }

    var useNum = confirm("Would you like your password to contain numbers?");
        if (useNum = true) {
            choiceArrays = choiceArrays + numbers;
        }

    var useSpe = confirm("Would you like your password to contain special characters (e.g. %, @, >, etc?)");
    if (useSpe = true) {
        choiceArrays = choiceArrays + special;
    }

    var useUpp = confirm("Would you like your password to contain upper case letters?");
    if (useUpp = true) {
        choiceArrays = choiceArrays + upperCase;
    }

    var useLow = confirm("Would you like your password to contain lower case letters?");
    if (useLow = true) {
        choiceArrays = choiceArrays + lowerCase;
    } 
    
    // else if (useNum === false && useSpe === false && useUpp === false && useLow === false) {
    //     break;
    // }


    document.getElementById("password").innerHTML = genPass (length, choiceArrays);

    }

    function genPass (len, arr) {
        var password = ['']
        for (var i = 0; i < len; i++) {
            var random = Math.floor(Math.random() * arr.length)
            password = password + arr[random];
        } 
        return password
    }

function copied() {
    var copiedText = document.getElementById("password");
    copiedText.select();
    document.execCommand("copy");
}

// 1) need to stop func if proper length isn't selected
// 2) need to stop func if no options selected
    // tried break; and return; but break makes whole function not work and return just keeps going
// 3) choiceArrays isn't compiling properly
// 4) Add styling, positioning, and responsiveness 