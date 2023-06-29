
const form = document.querySelector("form");
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const error_date = document.getElementById('error-date');
const error_cvc = document.getElementById('error-cvc');
const card_name = document.getElementById('card-name')
const cardholder_name = document.getElementById('cardholder-name')
const card_month = document.getElementById('card-month');
const card_year = document.getElementById('card-year');

cardholder_name.addEventListener('input',()=>{
  cardholder_name.value = cardholder_name.value.toUpperCase();
  card_name.textContent = cardholder_name.value;
});

cvc.addEventListener('input',(event)=>{
  if (cvc.validity.valid){
    quitErrors(cvc, error_cvc);
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

function quitErrors(input, error){
    // Reset the content of the message
    error.textContent = '';
  // Reset the visual state of the message
    error.className = 'hidden';
    input.className = 'input-date';
}

