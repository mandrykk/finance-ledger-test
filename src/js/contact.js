const email = document.querySelector('#email');
const btn = document.querySelector('#callback-btn');
const message = document.querySelector('.form-message');

btn.addEventListener('click', onSubmit);

function onSubmit(event) {
  if (email.value === '') {
    event.preventDefault();
    message.style.opacity = 1;
  } else {
    message.style.opacity = 0;
  }
}