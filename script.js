function closeAlert() {
  document.getElementById('custom-alert').classList.add('hidden');
}

function showAlert() {
  document.getElementById('custom-alert').classList.remove('hidden');
}

const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if ((username.value === 'Yeison0' && password.value === 'TheGame') || 
      (username.value === 'Yeison1' && password.value === 'Qwerty') ||
      (username.value === 'Yeison2' && password.value === 'Heads') ||
      (username.value === 'Yeison3' && password.value === 'Zetas') ||
      (username.value === 'Yeison4' && password.value === 'Cartel')) {
    if (username.value === 'Yeison0') {
      window.location.href = 'https://streamable.com/xnq0jh';
    } else if (username.value === 'Yeison1') {
      window.location.href = 'https://streamable.com/586os1';
    } else if (username.value === 'Yeison2') {
      window.location.href = 'https://streamable.com/cf5mib';
    } else if (username.value === 'Yeison3') {
      window.location.href = 'https://streamable.com/4935lm';
    } else if (username.value === 'Yeison4') {
      window.location.href = 'https://streamable.com/jslexi';
    }
  } else {
    showAlert();
  }
});
