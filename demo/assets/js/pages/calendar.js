import { showToast } from '../shared/toast.js';
import { initDropdowns } from '../shared/dropdown.js';
import { initMobileSidebar } from '../shared/mobile-sidebar.js';

// -- Hash-based modals (student desktop, student mobile, tutor desktop) --
const createEventBtn = document.getElementById('create-event-btn');
if (createEventBtn) {
  createEventBtn.addEventListener('click', () => {
    showToast(
      '<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />',
      'Événement créé',
      "L'événement a été créé avec succès"
    );
    location.hash = '';
  });
}

const deleteEventBtn = document.getElementById('delete-event-btn');
if (deleteEventBtn) {
  deleteEventBtn.addEventListener('click', () => {
    showToast(
      '<img src="../../assets/icons/trash-2.svg" alt="" class="icon-sm" />',
      'Événement supprimé',
      "L'événement a été supprimé avec succès"
    );
    location.hash = '';
  });
}

// Hash-based modal dismiss
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
    location.hash = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    location.hash = '';
  }
});

// -- Appointment list: open event details on click (all calendar pages) --
const eventDetailsModal = document.getElementById('eventDetailsModal');
const calendarBackdrop = document.getElementById('calendarModalBackdrop');

document.querySelectorAll('.appointment-item').forEach((item) => {
  item.addEventListener('click', () => {
    if (calendarBackdrop && eventDetailsModal) {
      calendarBackdrop.classList.add('active');
      eventDetailsModal.classList.add('active');
    } else if (eventDetailsModal) {
      location.hash = '#eventDetailsModal';
    }
  });
});

// -- Backdrop-based modals (student mobile, tutor mobile) --

if (calendarBackdrop) {
  const openBackdropModal = (modalId) => {
    calendarBackdrop.classList.add('active');
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      modalEl.classList.add('active');
    }
  };

  const closeBackdropModal = (modalId) => {
    calendarBackdrop.classList.remove('active');
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      modalEl.classList.remove('active');
    }
  };

  // Wire up tutor mobile buttons that reference openCreateModal etc.
  document.querySelectorAll('[onclick*="openCreateModal"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      openBackdropModal('createModal');
    });
  });

  document.querySelectorAll('[onclick*="closeCreateModal"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      closeBackdropModal('createModal');
    });
  });

  document.querySelectorAll('[onclick*="openDetailsModal"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      openBackdropModal('eventDetailsModal');
    });
  });

  document.querySelectorAll('[onclick*="closeDetailsModal"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      closeBackdropModal('eventDetailsModal');
    });
  });

  document.querySelectorAll('[onclick*="openDeleteConfirmModal"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      openBackdropModal('confirmDeleteModal');
    });
  });

  document.querySelectorAll('[onclick*="closeDeleteConfirmModal"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      closeBackdropModal('confirmDeleteModal');
    });
  });

  document.querySelectorAll('[onclick*="handleDeleteEvent"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      showToast(
        '<img src="../../assets/icons/trash-2.svg" alt="" class="icon-sm" />',
        'Événement supprimé',
        "L'événement a été supprimé avec succès"
      );
      closeBackdropModal('confirmDeleteModal');
    });
  });

  document.querySelectorAll('[onclick*="handleCreateEvent"]').forEach((el) => {
    el.removeAttribute('onclick');
    el.addEventListener('click', () => {
      showToast(
        '<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />',
        'Événement créé',
        "L'événement a été créé avec succès"
      );
      closeBackdropModal('createModal');
    });
  });

  calendarBackdrop.addEventListener('click', () => {
    ['createModal', 'eventDetailsModal', 'confirmDeleteModal'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.classList.contains('active')) {
        closeBackdropModal(id);
      }
    });
  });

  // Wire event details modal close (X button, Fermer button)
  const detailsModal = document.getElementById('eventDetailsModal');
  if (detailsModal) {
    detailsModal.querySelectorAll('.modal-close, .modal-footer .button-secondary').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeBackdropModal('eventDetailsModal');
      });
    });
  }

  // Wire create modal close (X button, Annuler)
  const createModal = document.getElementById('createModal');
  if (createModal) {
    createModal.querySelectorAll('.modal-close, .button-secondary').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeBackdropModal('createModal');
      });
    });
  }

  // Wire confirm delete modal close (Annuler)
  const confirmModal = document.getElementById('confirmDeleteModal');
  if (confirmModal) {
    confirmModal.querySelectorAll('.button-secondary').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeBackdropModal('confirmDeleteModal');
      });
    });
  }

  // ESC key to close backdrop modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && calendarBackdrop.classList.contains('active')) {
      ['createModal', 'eventDetailsModal', 'confirmDeleteModal'].forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.classList.contains('active')) {
          closeBackdropModal(id);
        }
      });
    }
  });
}

// Init dropdowns (addEventModalFilled on desktop, createModal on tutor mobile, etc.)
const eventModal = document.getElementById('addEventModalFilled') || document.getElementById('createModal');
initDropdowns(eventModal || document);

// Mobile sidebar
initMobileSidebar();
