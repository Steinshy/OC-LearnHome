import { showToast } from '../shared/toast.js';
import { initMobileSidebar } from '../shared/mobile-sidebar.js';

const statusLabels = {
  pending: 'À faire',
  inprogress: 'En cours',
  done: 'Complétée',
};

const statusNext = {
  pending: 'inprogress',
  inprogress: 'done',
  done: 'pending',
};

// Desktop dashboard: clickable task status cycling
document.querySelectorAll('.stat-status.clickable').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    const el = event.currentTarget;
    const next = el.dataset.next;
    el.dataset.status = next;
    el.textContent = statusLabels[next];
    el.dataset.next = statusNext[next];
    showToast(
      "<img src='../../assets/icons/file-edit.svg' width='18' height='18' alt='' />",
      'Statut mis à jour',
      "L'état de la tâche a changé"
    );
  });
});

// Mobile sidebar
initMobileSidebar();
