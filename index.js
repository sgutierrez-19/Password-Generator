var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';

var choiceArrays = [];

$('.start-button').on('click', () => {
  event.preventDefault();
  length();
});

function length() {
  $('.action-box').html(`
    <div class="card-body">
        <p>Please choose a password length between 8 and 128 characters:</p>
        <form class="numbers">
            <div class="input-group input-group-sm mb-3">
                <input type="text" placeholder="Enter password length" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
            </div>
            <button type="button" class="btn btn-primary to-num-button">
            Primary
            </button>
        </form>
    </div>`);
  $('.to-num-button').on('click', () => {
    alert('hello');
    event.preventDefault();
    numQuestion();
  });
}

function numQuestion() {
  $('.action-box').html(`
        <div class="card-body">
        <p>Would you like for your password to contain numbers?</p>
        <form class="gen-nums">
            <div class="radio">
                <label
                ><input type="radio" name="optradio" checked /> Yes</label
                >
            </div>
            <div class="radio">
                <label><input type="radio" name="optradio" /> No</label>
            </div>
            <button type="button" class="btn btn-primary to-special-button">
            Primary
            </button>
        </form>
    </div>`);
  $('.to-special-button').on('click', () => {
    event.preventDefault();
    special();
  });
}

function special() {
  $('.action-box').html(`
    <div class="card-body">
    <p>Would you like for your password to contain special characters? (e.g. %, @, >, etc)</p>
    <form class="gen-spec">
        <div class="radio">
            <label
            ><input type="radio" name="optradio" checked /> Yes</label
            >
        </div>
        <div class="radio">
            <label><input type="radio" name="optradio" /> No</label>
        </div>
        <button type="button" class="btn btn-primary to-special-button">
        Primary
        </button>
    </form>
</div>`);
  $('.to-special-button').on('click', () => {
    event.preventDefault();
    special();
  });
}

function upper() {}

function lower() {}

// Asks to choose a length of the password between 8 and 128 characters
function questions() {
  var length = prompt('Choose a password length between 8 and 128 characters:');
  if (length < 8 || length > 128) {
    return alert('You must choose a number between 8 and 128.');
  } else if (isNaN(length)) {
    return alert('You must choose a number.');
  }

  var useNum = confirm('Would you like your password to contain numbers?');
  if (useNum === true) {
    choiceArrays = choiceArrays + numbers;
  }

  var useSpe = confirm(
    'Would you like your password to contain special characters (e.g. %, @, >, etc?)'
  );
  if (useSpe === true) {
    choiceArrays = choiceArrays + special;
  }

  var useUpp = confirm(
    'Would you like your password to contain upper case letters?'
  );
  if (useUpp === true) {
    choiceArrays = choiceArrays + upperCase;
  }

  var useLow = confirm(
    'Would you like your password to contain lower case letters?'
  );
  if (useLow === true) {
    choiceArrays = choiceArrays + lowerCase;
  } else if (
    useNum === false &&
    useSpe === false &&
    useUpp === false &&
    useLow === false
  ) {
    return alert('You must select one of the options.');
  }

  document.getElementById('password').innerHTML = genPass(length, choiceArrays);
}

function genPass(len, arr) {
  var password = [''];
  for (var i = 0; i < len; i++) {
    var random = Math.floor(Math.random() * arr.length);
    password = password + arr[random];
  }
  return password;
}

function copied() {
  var copiedText = document.getElementById('password');
  copiedText.select();
  document.execCommand('copy');
}
