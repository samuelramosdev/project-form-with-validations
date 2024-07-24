const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // validações
  isNameValid(nameInput.value);
  isEmailValid(emailInput.value);

  if (isNameValid && isEmailValid)
    form.submit();
})

const isNameValid = (name) => {
  if (!name) {
    alert('Por favor, preencha seu nome!');
    return false;
  }
  return true;
}

const isEmailValid = (email) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  const test = !emailRegex.test(email)

  if (!test || !email) {
    alert('Por favor, preencha seu email!');
    return false;
  }

  return true;
}