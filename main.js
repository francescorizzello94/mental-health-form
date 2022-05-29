let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName () {
  let name = document.getElementById('name').value;

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) { 
    nameError.innerHTML = "Provide your full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() { 
  let phone = document.getElementById('phone-number').value;

  if (!phone.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) { 
    phoneError.innerHTML = "Please provide a valid phone number";
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() { 
  let email = document.getElementById('email').value;

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Please provide your email";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateCheckbox() { 
  if ($('#checkbox :checkbox:checked').length > 0) {
    return true;
  }
  return false;
}

function validateMessage() { 
  let message = document.getElementById('message').value;
  let maxCharCount = 500;

  if (message.length > maxCharCount) {
    messageError.innerHTML = "500 characters";
    return false;
  }

  if (message.length === 0) {
    messageError.innerHTML = "Provide the required information";
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateCheckbox() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = "Please fix the relevant input fields";
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 5000);
    return false;
  }
}