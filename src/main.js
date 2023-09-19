const error_date = document.getElementById('error-date');
const card_name = document.getElementById('card-name');
const card_number = document.getElementById('card-number');
const card_month = document.getElementById('card-month');
const card_year = document.getElementById('card-year');
const card_cvc = document.getElementById('card-cvc');
const cardholder_name = document.getElementById('cardholder-name');
const cardholder_number = document.getElementById('cardholder-number');
const cardholder_month = document.getElementById('cardholder-month');
const cardholder_year = document.getElementById('cardholder-year');
const cardholder_cvc = document.getElementById('cardholder-cvc');
const success = document.getElementById('success');

cardholder_cvc.addEventListener('focusout', reviewCvc);
cardholder_year.addEventListener('focusout', reviewCardholderYear);
cardholder_month.addEventListener('focusout', reviewCardholderMonth);
cardholder_name.addEventListener('input', reviewCardholderName);
cardholder_number.addEventListener('input', ()=>{
  cardholder_number.value = cc_format(cardholder_number.value);
});
cardholder_number.addEventListener('focusout',()=>{
  reviewCardholderNumber();
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if (validateForm()) {
    document.querySelector('form').classList.add('fade-out');
    // document.querySelector('form').classList.add('hidden');
    success.classList.remove('hidden');
    success.classList.add('fade-in');
  }
});

function validateForm(){
  const conditions = [
    reviewCardholderName(), 
    reviewCardholderNumber(), 
    reviewCardholderMonth(), 
    reviewCardholderYear(), 
    reviewCvc()
  ];
  const allConditionsMet = conditions.every(condition => condition === true);

  if (allConditionsMet){
    return true;
  }else{
    return false;
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('span');

  element.classList.remove('success-input');
  element.classList.add('error-input');
  errorDisplay.innerText = message;
  errorDisplay.classList.replace('hidden', 'error');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('span');

  element.classList.remove('error-input');
  element.classList.add('success-input');
  errorDisplay.innerText = '';
  inputControl.classList.replace('error', 'hidden');
}

function reviewCvc(){
  if (cardholder_cvc.value != "") {
    if (validateCvc(cardholder_cvc.value)) {
      setSuccess(cardholder_cvc);
      card_cvc.textContent = cardholder_cvc.value;
      return true;
    } else {
      setError(cardholder_cvc,'Enter a valid CVC.');
    }
  } else {
    setError(cardholder_cvc,'Can\'t be blank.');
  }
  return false;
}

function reviewCardholderName(){
  cardholder_name.value = cardholder_name.value.toUpperCase();
  if (validateCardHolderName(cardholder_name)){
    setSuccess(cardholder_name);
    card_name.textContent = cardholder_name.value;
    return true;
  } else {
    setError(cardholder_name,"Wrong name, letters only");
  }
  return false;
}

function reviewCardholderNumber(){
  if (validateCreditCardNumber()) {
    console.log("Thank You!");
    setSuccess(cardholder_number); 
    card_number.textContent = cardholder_number.value;
    return true;
  } else {
    console.log("Wrong format, numbers only.");
    setError(cardholder_number,"Wrong number, enter a valid credit card");
    return false;
  }
}

function reviewCardholderMonth(){
  if (cardholder_month.value != "") {
    if (validateMonth(cardholder_month.value)) {
      setSuccess(cardholder_month);
      validateDate();
      return true;
    } else {
      setError(cardholder_month, 'Enter a vaild month')
    }
  } else {
    setError(cardholder_month, 'Can\'t be blank.')
  }
  return false;
}

function reviewCardholderYear(){
  if (cardholder_year.value != "") {
    if (validateYear(cardholder_year.value)) {
      setSuccess(cardholder_year);
      validateDate();
      return true;
    } else {
      setError(cardholder_year, 'Enter a vaild year')
    }
  } else {
    setError(cardholder_year, 'Can\'t be blank.')
  }
  return false;
}


function validateDate(){
  if (validateMonth(cardholder_month.value) === true && validateYear(cardholder_year.value) === true){
    error_date.classList.add('hidden');
    card_month.textContent = cardholder_month.value;
    card_year.textContent = cardholder_year.value;
    return true;
  } else if (!validateMonth(cardholder_month.value)){
    error_date.classList.add("error");
    error_date.textContent = "Enter a valid month.";
  } else if (!validateYear(cardholder_year.value)){
    error_date.classList.add("error");
    error_date.textContent = "Enter a valid year.";
  } else if (!validateMonth(cardholder_month.value) && !validateYear(cardholder_year.value)){
    error_date.classList.add("error");
    error_date.textContent = "Enter a valid date.";
  }
  return false;
}

function validateMonth (value){
  let regexPattern =/0[1-9]|1[0-2]/;
  return regexPattern.test(value); 
}

function validateYear (value){
  let regexPattern =/[0-9]{2}/;
  return regexPattern.test(value); 
}

function validateCreditCardNumber() {
  let value = cardholder_number.value;
  let ccNum = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  console.log(ccNum);

  const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  const amexpRegEx = /^(?:3[47][0-9]{13})$/;
  const discovRegEx = /^(?:3(?:011|5[0-9][0-9])[0-9]{12})$/;

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

  return isValid;
}

function cc_format(value) {
  let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
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

function validateCvc(value) {
  const regex = /^(0{1,2}[0-9]{1}|[1-9][0-9]{2})$/;
  return regex.test(value);
}

function validateCardHolderName(element){
  if (element.value.length >= 4 || element.value.length === 0){
    let regexPattern = /^(?:[A-Za-z]+ ?){1,3}$/;
    return regexPattern.test(element.value);
  }
}