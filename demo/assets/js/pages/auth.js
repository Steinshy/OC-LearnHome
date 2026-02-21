import { showToast } from '../shared/toast.js';

const handleLogin = (e) => {
  e.preventDefault();
  showToast('<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />', 'Connexion', 'Connexion en cours...');
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 500);
};

const handleSignup = (e) => {
  e.preventDefault();
  showToast(
    '<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />',
    'Inscription',
    'Création de votre compte en cours...'
  );
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 500);
};

const handleRecovery = (e) => {
  e.preventDefault();
  showToast(
    '<img src="../../assets/icons/mail.svg" alt="" class="icon-sm" />',
    'Récupération',
    'Email de récupération envoyé avec succès'
  );
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 500);
};

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const recoveryForm = document.getElementById('recovery-form');

if (loginForm) {
  loginForm.addEventListener('submit', handleLogin);
}
if (signupForm) {
  signupForm.addEventListener('submit', handleSignup);
}
if (recoveryForm) {
  recoveryForm.addEventListener('submit', handleRecovery);
}
