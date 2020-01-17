var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var passwordLength = 0;

var choiceArrays = '';

$('.start-button').on('click', () => {
  event.preventDefault();
  length();
});

function length() {
  $('.action-box').html(`
    <div class="card-body">
        <p>Please choose a password length between 8 and 128 characters:</p>
        <form class="num-form">
            <div class="input-group input-group-sm mb-3">
                <input type="text" placeholder="Enter password length" class="num-input form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
            </div>
            <button type="button" class="btn btn-primary to-num-button">
            Next
            </button>
        </form>
    </div>`);
  $('.num-form').on('submit', () => {
    event.preventDefault();
    if (isNaN($('.num-input').val())) {
      return alert('You must enter a number between 8 and 128.');
    } else if ($('.num-input').val() > 128) {
      return alert('Your password must be under 128 characters.');
    } else if ($('.num-input').val() < 8) {
      return alert('Your password must be over 8 characters.');
    }
    passwordLength = $('.num-input').val();
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
                ><input type="radio" name="optradio" value="Yes" checked /> Yes</label
                >
            </div>
            <div class="radio">
                <label><input type="radio" name="optradio" value="No" /> No</label>
            </div>
            <button type="button" class="btn btn-primary to-special-button">
            Next
            </button>
        </form>
    </div>`);
  $('.to-special-button').on('click', () => {
    event.preventDefault();
    if ($('input[name=optradio]:checked', '.gen-nums').val() === 'Yes') {
      choiceArrays = choiceArrays + numbers;
      specialChar();
    } else {
      specialChar();
    }
  });
}

function specialChar() {
  $('.action-box').html(`
    <div class="card-body">
    <p>Would you like for your password to contain special characters? (e.g. %, @, >, etc)</p>
    <form class="gen-spec">
        <div class="radio">
            <label
            ><input type="radio" name="optradio" value="Yes" checked /> Yes</label
            >
        </div>
        <div class="radio">
            <label><input type="radio" name="optradio" value="No" /> No</label>
        </div>
        <button type="button" class="btn btn-primary to-upper-button">
        Next
        </button>
    </form>
</div>`);
  $('.to-upper-button').on('click', () => {
    event.preventDefault();
    if ($('input[name=optradio]:checked', '.gen-spec').val() === 'Yes') {
      choiceArrays = choiceArrays + special;
      upper();
    } else {
      upper();
    }
  });
}

function upper() {
  $('.action-box').html(`
    <div class="card-body">
    <p>Would you like for your password to contain upper case characters?</p>
    <form class="gen-upper">
        <div class="radio">
            <label
            ><input type="radio" name="optradio" value="Yes" checked /> Yes</label
            >
        </div>
        <div class="radio">
            <label><input type="radio" name="optradio" value="No" /> No</label>
        </div>
        <button type="button" class="btn btn-primary to-lower-button">
        Next
        </button>
    </form>
</div>`);
  $('.to-lower-button').on('click', () => {
    event.preventDefault();
    if ($('input[name=optradio]:checked', '.gen-upper').val() === 'Yes') {
      choiceArrays = choiceArrays + upperCase;
      lower();
    } else {
      lower();
    }
  });
}

function lower() {
  $('.action-box').html(`
    <div class="card-body">
        <p>Would you like for your password to contain lower case characters?</p>
        <form class="gen-lower">
            <div class="radio">
                <label
                ><input type="radio" name="optradio" value="Yes" checked /> Yes</label
                >
            </div>
            <div class="radio">
                <label><input type="radio" name="optradio" value="No" /> No</label>
            </div>
            <button type="button" class="btn btn-primary finish-button">
            Next
            </button>
        </form>
    </div>`);
  $('.finish-button').on('click', () => {
    event.preventDefault();
    if ($('input[name=optradio]:checked', '.gen-lower').val() === 'Yes') {
      choiceArrays = choiceArrays + lowerCase;
      genPass(passwordLength, choiceArrays);
    } else {
      genPass(passwordLength, choiceArrays);
    }
  });
}

function genPass(len, arr) {
  var password = [''];
  for (var i = 0; i < len; i++) {
    var random = Math.floor(Math.random() * arr.length);
    password = password + arr[random];
  }
  $('.action-box').html(`
  <div class="card-body">
        <h5 class="card-title">Your secure Password is below:</h5>
        <p class="card-text password-form">${password}</p>
        <button type="button" class="btn btn-primary start-button">
        Restart
        </button>
  </div>`);
}
