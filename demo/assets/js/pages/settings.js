import { showToast } from '../shared/toast.js';
import { initDropdowns } from '../shared/dropdown.js';
import { initMobileSidebar } from '../shared/mobile-sidebar.js';

// -- Avatar toggle (was in <head> script) --
const toggleAvatar = () => {
  const preview = document.getElementById('avatarPreview');
  const userAvatar = document.getElementById('userAvatar');
  if (preview) {
    preview.classList.toggle('student-picture');
  }
  if (userAvatar) {
    userAvatar.classList.toggle('student-picture');
  }
};

const fileInputLabel = document.querySelector('.file-input-label');
if (fileInputLabel) {
  fileInputLabel.addEventListener('click', toggleAvatar);
}

// -- Toast handlers --
const handlePersonalInfoToast = () => {
  showToast(
    '<img src="../../assets/icons/user.svg" alt="" class="icon-sm" />',
    'Informations personnelles',
    'Vos informations ont été sauvegardées'
  );
};

const handlePasswordChangeToast = () => {
  showToast(
    '<img src="../../assets/icons/shield.svg" alt="" class="icon-sm" />',
    'Sécurité du compte',
    'Votre mot de passe a été mis à jour'
  );
};

const handleNotificationToast = () => {
  const checkedCount = document.querySelectorAll('#notification-group .checkbox:checked').length;
  showToast(
    '<img src="../../assets/icons/bell.svg" alt="" class="icon-sm" />',
    'Préférences de notification',
    `${checkedCount} notification${checkedCount > 1 ? 's' : ''} activée${checkedCount > 1 ? 's' : ''}`
  );
};

const handleThemePreferencesToast = () => {
  showToast(
    '<img src="../../assets/icons/palette.svg" alt="" class="icon-sm" />',
    "Préférences d'affichage",
    'Thème mis à jour avec succès'
  );
};

const handleDownloadDataToast = () => {
  showToast(
    "<img src='../../assets/icons/download.svg' width='18' height='18' alt='' />",
    'Téléchargement des données',
    'Votre demande a été envoyée. Vous recevrez vos données par email.'
  );
};

const handleActivityToast = () => {
  showToast(
    "<img src='../../assets/icons/layout-dashboard.svg' width='18' height='18' alt='' />",
    'Mon activité',
    'Chargement de votre activité...'
  );
};

const deleteAccountToast = () => {
  const container = document.getElementById('toast-container');
  if (!container) {
    return;
  }
  const toast = document.createElement('div');
  toast.className = 'toast danger';
  toast.innerHTML =
    '<div class="toast-title"><img src="../../assets/icons/alert-triangle.svg" alt="" class="icon-inline" /> Compte supprimé</div><div class="toast-message">Votre compte a été supprimé avec succès. Redirection en cours...</div>';
  container.append(toast);
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2700);
};

// Wire up buttons by data-action (no inline onclick in HTML)
document.querySelectorAll('[data-action="save-personal-info"]').forEach((el) => {
  el.addEventListener('click', handlePersonalInfoToast);
});

document.querySelectorAll('[data-action="save-password"]').forEach((el) => {
  el.addEventListener('click', handlePasswordChangeToast);
});

document.querySelectorAll('[data-action="save-notifications"]').forEach((el) => {
  el.addEventListener('click', handleNotificationToast);
});

document.querySelectorAll('[data-action="save-theme"]').forEach((el) => {
  el.addEventListener('click', handleThemePreferencesToast);
});

document.querySelectorAll('[data-action="download-data"]').forEach((el) => {
  el.addEventListener('click', handleDownloadDataToast);
});

document.querySelectorAll('[data-action="view-activity"]').forEach((el) => {
  el.addEventListener('click', handleActivityToast);
});

document.querySelectorAll('[data-action="delete-account"]').forEach((el) => {
  el.addEventListener('click', deleteAccountToast);
});

// Fallback: also support onclick for backward compatibility
document.querySelectorAll('[onclick*="handlePersonalInfoToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', handlePersonalInfoToast);
});
document.querySelectorAll('[onclick*="handlePasswordChangeToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', handlePasswordChangeToast);
});
document.querySelectorAll('[onclick*="handleNotificationToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', handleNotificationToast);
});
document.querySelectorAll('[onclick*="handleThemePreferencesToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', handleThemePreferencesToast);
});
document.querySelectorAll('[onclick*="handleDownloadDataToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', handleDownloadDataToast);
});
document.querySelectorAll('[onclick*="deleteAccountToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', deleteAccountToast);
});
document.querySelectorAll('[onclick*="showToast"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', handleActivityToast);
});

// Init custom dropdowns
initDropdowns();

// Mobile sidebar
initMobileSidebar();
