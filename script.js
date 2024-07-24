const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameIsValid = isNameValid(nameInput.value);
  const emailIsValid = isEmailValid(emailInput.value);
  const passwordIsValid = isPasswordValid(passwordInput.value, 8);
  const selectIsValid = isSelectValid(jobSelect.value);

  if (nameIsValid && emailIsValid && passwordIsValid) {
    form.submit();
  };
});

const isNameValid = (name) => {
  if (!name) {
    alert('Por favor, preencha seu nome!');
    return false;
  }
  return true;
}

const isEmailValid = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email) || !email) {
    alert('Por favor, preencha seu email!');
    return false;
  }

  return true;
}

const isPasswordValid = (password, minDigits) => {
  if (!password || password.length < minDigits) {
    alert('A senha precisa ter no mínimo 8 dígitos!');
    return false;
  }
  return true;
}

const isSelectValid = (select) => {
  if (!select) {
    alert('Por favor, selecione a sua situação')
    return false;
  }
  return true;
} 