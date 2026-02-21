import { showToast } from '../shared/toast.js';
import { parseDeadlineDate } from '../shared/form-utils.js';
import { initMobileSidebar } from '../shared/mobile-sidebar.js';

const taskModal = document.getElementById('taskModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const taskForm = document.getElementById('taskForm');
const addTaskBtn = document.getElementById('addTaskBtn');
const closeTaskModalBtn = document.getElementById('closeTaskModal');
const cancelTaskBtn = document.getElementById('cancelTaskBtn');
const submitTaskBtn = document.getElementById('submitTaskBtn');
const modalTitle = document.getElementById('modalTitle');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskDate = document.getElementById('taskDate');
const titleCounter = document.getElementById('titleCounter');
const descCounter = document.getElementById('descCounter');

if (taskDate) {
  const today = new Date();
  taskDate.min = today.toISOString().split('T')[0];
}

const resetForm = () => {
  if (taskForm) {
    taskForm.reset();
  }
  document.querySelectorAll('.form-input, .form-textarea').forEach((input) => {
    input.classList.remove('error');
  });
  document.querySelectorAll('.form-error').forEach((error) => {
    error.textContent = '';
  });
  if (titleCounter) {
    titleCounter.textContent = '0';
  }
  if (descCounter) {
    descCounter.textContent = '0';
  }
  if (taskModal) {
    taskModal.dataset.mode = 'create';
  }
  const taskMetaSection = document.getElementById('taskMetaSection');
  if (taskMetaSection) {
    taskMetaSection.hidden = true;
  }
  if (modalTitle) {
    modalTitle.textContent = 'Ajouter une tâche';
  }
  if (submitTaskBtn) {
    submitTaskBtn.textContent = 'Créer la tâche';
    submitTaskBtn.dataset.action = 'create';
  }
};

const showFieldError = (fieldName, message) => {
  const field = document.getElementById(`task${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
  const errorEl = document.getElementById(`${fieldName}Error`);
  if (field) {
    field.classList.add('error');
  }
  if (errorEl) {
    errorEl.textContent = message;
  }
};

const clearError = (fieldName) => {
  const field = document.getElementById(`task${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
  const errorEl = document.getElementById(`${fieldName}Error`);
  if (field) {
    field.classList.remove('error');
  }
  if (errorEl) {
    errorEl.textContent = '';
  }
};

const validateForm = () => {
  let isValid = true;

  if (!taskTitleInput || taskTitleInput.value.trim() === '') {
    showFieldError('title', 'Le titre de la tâche est obligatoire');
    isValid = false;
  } else if (taskTitleInput.value.length > 100) {
    showFieldError('title', 'Le titre ne doit pas dépasser 100 caractères');
    isValid = false;
  }

  if (taskDescription && taskDescription.value.length > 500) {
    showFieldError('description', 'La description ne doit pas dépasser 500 caractères');
    isValid = false;
  }

  if (!taskDate || taskDate.value === '') {
    showFieldError('date', "Une date d'échéance est obligatoire");
    isValid = false;
  } else {
    const selectedDate = new Date(taskDate.value);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (selectedDate < now) {
      showFieldError('date', "La date d'échéance ne peut pas être dans le passé");
      isValid = false;
    }
  }

  return isValid;
};

let formDirty = false;
const markFormDirty = () => {
  formDirty = true;
};
const hasUnsavedChanges = () =>
  formDirty &&
  ((taskTitleInput && taskTitleInput.value.trim() !== '') ||
    (taskDescription && taskDescription.value.trim() !== '') ||
    (taskDate && taskDate.value !== ''));

const getCurrentUserName = () => {
  const el = document.querySelector('.user-name');
  return el ? el.textContent.trim() : '';
};

const openTaskModal = () => {
  if (!taskModal) {
    return;
  }
  taskModal.dataset.mode = 'create';
  const taskMetaSection = document.getElementById('taskMetaSection');
  const taskAttributedBy = document.getElementById('taskAttributedBy');
  if (taskMetaSection) {
    taskMetaSection.hidden = false;
  }
  if (taskAttributedBy) {
    const userName = getCurrentUserName();
    taskAttributedBy.textContent = userName ? `Assigné par: ${userName}` : 'Assigné par: —';
  }
  if (modalTitle) {
    modalTitle.textContent = 'Ajouter une tâche';
  }
  if (submitTaskBtn) {
    submitTaskBtn.textContent = 'Créer la tâche';
    submitTaskBtn.dataset.action = 'create';
  }
  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
  }
  taskModal.classList.add('active');
  if (taskTitleInput) {
    taskTitleInput.focus();
  }
};

const openModalForEdit = (taskCard) => {
  if (!taskModal) {
    return;
  }
  const cardTitle = taskCard.querySelector('.task-title')?.textContent ?? '';
  const cardDescription = taskCard.querySelector('.task-description')?.textContent ?? '';
  const deadlineMetaItem = taskCard.querySelector('.task-meta .meta-item:first-child');
  const deadlineText = deadlineMetaItem ? deadlineMetaItem.textContent : '';
  const attributedMetaItem = taskCard.querySelector('.task-meta .meta-item:nth-child(2)');
  const attributedText = attributedMetaItem ? attributedMetaItem.textContent.trim() : '';

  if (taskTitleInput) {
    taskTitleInput.value = cardTitle;
  }
  const trimmedDesc = cardDescription.trim();
  if (taskDescription) {
    taskDescription.value = trimmedDesc;
  }
  if (taskDate) {
    const isoDate = parseDeadlineDate(deadlineText);
    if (isoDate) {
      taskDate.value = isoDate;
    }
  }

  const taskMetaSection = document.getElementById('taskMetaSection');
  const taskAttributedBy = document.getElementById('taskAttributedBy');
  if (taskMetaSection) {
    taskMetaSection.hidden = false;
  }
  if (taskAttributedBy) {
    // Student tasks: creator is the student (self) when "Auto-créée", else show from card
    const userName = getCurrentUserName();
    const isAutoCreated = /^Auto-créée$/i.test(attributedText);
    const name = isAutoCreated && userName
      ? userName
      : attributedText.replace(/^(?:Créé par|Assigné par):\s*/i, '').trim();
    taskAttributedBy.textContent = name ? `Assigné par: ${name}` : (userName ? `Assigné par: ${userName}` : 'Assigné par: —');
  }

  if (titleCounter) {
    titleCounter.textContent = cardTitle.length;
  }
  if (descCounter) {
    descCounter.textContent = trimmedDesc.length;
  }

  taskModal.dataset.mode = 'edit';
  if (modalTitle) {
    modalTitle.textContent = 'Modifier la tâche';
  }
  if (submitTaskBtn) {
    submitTaskBtn.textContent = 'Enregistrer les modifications';
    submitTaskBtn.dataset.action = 'edit';
  }

  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
  }
  taskModal.classList.add('active');
  if (taskTitleInput) {
    taskTitleInput.focus();
  }
};

const closeModal = () => {
  if (!taskModal) {
    return;
  }
  if (hasUnsavedChanges()) {
    // eslint-disable-next-line no-alert
    if (!confirm('Vous avez des modifications non enregistrées. Continuer ?')) {
      return;
    }
  }
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
  }
  taskModal.classList.remove('active');
  resetForm();
  formDirty = false;
};

// Event listeners
if (taskTitleInput) {
  taskTitleInput.addEventListener('input', () => {
    if (titleCounter) {
      titleCounter.textContent = taskTitleInput.value.length;
    }
    markFormDirty();
    if (taskTitleInput.value.length >= 100) {
      showFieldError('title', 'Le titre ne doit pas dépasser 100 caractères');
    } else {
      clearError('title');
    }
  });
}

if (taskDescription) {
  taskDescription.addEventListener('input', () => {
    if (descCounter) {
      descCounter.textContent = taskDescription.value.length;
    }
    markFormDirty();
    if (taskDescription.value.length >= 500) {
      showFieldError('description', 'La description ne doit pas dépasser 500 caractères');
    } else {
      clearError('description');
    }
  });
}

if (taskDate) {
  taskDate.addEventListener('change', () => {
    markFormDirty();
    clearError('date');
  });
}

if (taskForm) {
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    if (taskModal && taskModal.dataset.mode === 'edit') {
      showToast(
        '<img src="../../assets/icons/pencil.svg" alt="" class="icon-sm" />',
        'Tâche modifiée',
        'Les modifications ont été enregistrées'
      );
    } else {
      showToast(
        '<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />',
        'Tâche créée',
        'Votre nouvelle tâche a été ajoutée avec succès'
      );
    }

    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
    }
    if (taskModal) {
      taskModal.classList.remove('active');
    }
    resetForm();
    formDirty = false;
  });
}

if (addTaskBtn) {
  addTaskBtn.addEventListener('click', openTaskModal);
}
if (closeTaskModalBtn) {
  closeTaskModalBtn.addEventListener('click', closeModal);
}
if (cancelTaskBtn) {
  cancelTaskBtn.addEventListener('click', closeModal);
}

if (taskModal) {
  taskModal.addEventListener('click', (e) => {
    if (e.target === taskModal) {
      closeModal();
    }
  });
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && taskModal && taskModal.classList.contains('active')) {
    closeModal();
  }
});

// Task card delegation
document.querySelectorAll('.task-card').forEach((card) => {
  const checkbox = card.querySelector('.task-checkbox');
  const editBtn = card.querySelector('.task-actions .action-btn:first-child');
  const deleteBtn = card.querySelector('.task-actions .action-btn:last-child');
  const cardTitle = card.querySelector('.task-title')?.textContent ?? '';

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      showToast(
        '<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />',
        'Tâche mise à jour',
        checkbox.checked ? 'Tâche marquée comme complétée' : 'Tâche marquée comme incomplète'
      );
    });
  }

  if (editBtn) {
    editBtn.addEventListener('click', () => {
      openModalForEdit(card);
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      showToast(
        '<img src="../../assets/icons/trash-2.svg" alt="" class="icon-sm" />',
        'Tâche supprimée',
        `"${cardTitle}" a été supprimée`
      );
    });
  }
});

// Mobile sidebar
initMobileSidebar();
