const form = document.querySelector("form");
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const error_date = document.getElementById('error-date');
const error_cvc = document.getElementById('error-cvc');
const card_name = document.getElementById('card-name');
const card_number = document.getElementById('card-number');
const cardholder_name = document.getElementById('cardholder-name');
const cardholder_number = document.getElementById('cardholder-number');
const card_month = document.getElementById('card-month');
const card_year = document.getElementById('card-year');
const card_cvc = document.getElementById('card-cvc');
const cardholder_name_error = document.getElementById('cardholder-name-error');
const cardholder_number_error = document.getElementById('cardholder-number-error');


cardholder_name.addEventListener('input',()=>{
  cardholder_name.value = cardholder_name.value.toUpperCase();
  card_name.textContent = cardholder_name.value;

  if (cardholder_name.value.length >= 4){
    let regexPattern = /^(?:[A-Za-z]+ ?){1,3}$/;
    if(regexPattern.test(cardholder_name.value))
    {
      cardholder_name.classList = null;
      cardholder_name.classList.add('input-success');
      cardholder_name_error.classList = null;
      cardholder_name_error.classList.add('hidden');
 
    } else {
      cardholder_name.classList = null;
      cardholder_name.classList.add('error-input');
      cardholder_name_error.classList = null;
      cardholder_name_error.classList.add('error');
      cardholder_name_error.innerText = "Wrong format, letters only";
    }
  }
});

function cc_format(value) {
  let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  let matches = v.match(/\d{4,16}/g);
  let match = matches && matches[0] || ''
  let parts = []

  for (let i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
  }

  if (parts.length) {
      return parts.join(' ')
  } else {
      return value
  }
}

cardholder_number.addEventListener('change', ValidateCreditCardNumber);

cardholder_number.addEventListener('input',(event)=>{
  cardholder_number.value = cc_format(cardholder_number.value);
  card_number.textContent = cardholder_number.value;
});

function ValidateCreditCardNumber() {
  let value = cardholder_number.value;
  let ccNum = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

  const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  const amexpRegEx = /^(?:3[47][0-9]{13})$/;
  const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  let isValid = false;

  if (visaRegEx.test(ccNum)) {
    isValid = true;
  } else if(mastercardRegEx.test(ccNum)) {
    isValid = true;
  } else if(amexpRegEx.test(ccNum)) {
    isValid = true;
  } else if(discovRegEx.test(ccNum)) {
    isValid = true;
  }

  if (isValid) {
    console.log("Thank You!");
    cardholder_number.classList = null;
    cardholder_number.classList.add("input-success");
    cardholder_number_error.classList = null;
    cardholder_number_error.classList.add("hidden");
  } else {
    console.log("Wrong format, numbers only.");
    cardholder_number.classList = null;
    cardholder_number.classList.add("error-input");
    cardholder_number_error.classList = null;
    cardholder_number_error.classList.add("error");
    cardholder_number_error.innerText = "Wrong number, enter a valid credit card";
  }
}

cvc.addEventListener('input',(event)=>{
  if (cvc.validity.valid){
    quitErrors(cvc, error_cvc);
    card_cvc.textContent = cvc.value;
  } else {
    showError(cvc,error_cvc);
  }
});

year.addEventListener('input',(event)=>{
  if (year.validity.valid){
    quitErrors(year,error_date);
    card_year.textContent = year.value;
  } else {
    showError(year,error_date);
  }
});

month.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (month.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    quitErrors(month,error_date)
    card_month.textContent = month.value;
  } else {
    // If there is still an error, show the correct error
    showError(month,error_date);
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!month.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError(month,error_date);
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError(input,error) {
  if (input.validity.valueMissing){
    renderErrors(input,error,"Can't be blank.");
  } else {
    renderErrors(input,error,"Wrong format, numbers only.");
  }
}

function renderErrors(input,error,message ){
  // Set the styling appropriately
  error.textContent = message; // Reset the content of the message
  error.className = "error";
  input.className = "error-input";
}

function quitErrors(input, error) {
  // Reset the content of the message
  error.textContent = "";
  // Reset the visual state of the message
  error.className = "hidden";
  input.className = "input-date";
}

