import { showToast } from '../shared/toast.js';
import { parseDeadlineDate } from '../shared/form-utils.js';
import { initDropdowns } from '../shared/dropdown.js';
import { initMobileSidebar } from '../shared/mobile-sidebar.js';

const getEl = (id) => document.getElementById(id);

const modal = getEl('createTaskModal');
const backdrop = getEl('modalBackdrop');
const form = getEl('taskForm');
const modalTitleEl = getEl('modalTitle');
const submitBtn = getEl('submitTaskBtn');

const closeModal = () => {
  if (modal) {
    modal.classList.remove('active');
  }
  if (backdrop) {
    backdrop.classList.remove('active');
  }
  if (form) {
    form.reset();
  }
  if (modal) {
    modal.dataset.mode = 'create';
  }
  const taskMetaSection = getEl('taskMetaSection');
  if (taskMetaSection) {
    taskMetaSection.hidden = true;
  }
  if (modalTitleEl) {
    modalTitleEl.textContent = 'Créer une nouvelle tâche';
  }
  if (submitBtn) {
    submitBtn.textContent = 'Créer la tâche';
    submitBtn.dataset.action = 'create';
  }

  if (modal) {
    modal.querySelectorAll('.dropdown-item').forEach((item) => {
      item.classList.remove('selected');
    });
    const studentToggle = modal.querySelector('#taskStudentDropdown .dropdown-toggle');
    if (studentToggle) {
      studentToggle.textContent = '-- Sélectionner un élève --';
    }
    const prioritySelected = modal.querySelector('#taskPriorityDropdown .dropdown-item.selected');
    if (prioritySelected) {
      prioritySelected.classList.remove('selected');
    }
    const priorityDefault = modal.querySelector('#taskPriorityDropdown .dropdown-item:nth-child(2)');
    if (priorityDefault) {
      priorityDefault.classList.add('selected');
    }
    const priorityToggle = modal.querySelector('#taskPriorityDropdown .dropdown-toggle');
    if (priorityToggle) {
      priorityToggle.textContent = 'Normal';
    }
  }
};

const getCurrentUserName = () => {
  const el = document.querySelector('.user-name');
  return el ? el.textContent.trim() : '';
};

const openModalForCreate = () => {
  if (modal) {
    modal.classList.add('active');
  }
  if (backdrop) {
    backdrop.classList.add('active');
  }
  if (modal) {
    modal.dataset.mode = 'create';
  }
  const taskMetaSection = getEl('taskMetaSection');
  const taskAttributedBy = getEl('taskAttributedBy');
  if (taskMetaSection) {
    taskMetaSection.hidden = false;
  }
  if (taskAttributedBy) {
    const userName = getCurrentUserName();
    taskAttributedBy.textContent = userName ? `Assigné par: ${userName}` : 'Assigné par: —';
  }
  if (modalTitleEl) {
    modalTitleEl.textContent = 'Créer une nouvelle tâche';
  }
  if (submitBtn) {
    submitBtn.textContent = 'Créer la tâche';
    submitBtn.dataset.action = 'create';
  }
};

const openModalForEdit = (taskCard) => {
  const taskTitle = taskCard.querySelector('.task-title')?.textContent ?? '';
  const taskDesc = taskCard.querySelector('.task-description')?.textContent ?? '';
  const deadlineMetaItem = taskCard.querySelector('.task-meta .meta-item:nth-child(1)');
  const deadlineText = deadlineMetaItem ? deadlineMetaItem.textContent : '';
  const priorityBadge = taskCard.querySelector('.priority-badge');
  const priority = priorityBadge ? priorityBadge.className.replace('priority-badge priority-', '') : 'medium';

  const titleInput = getEl('taskTitle');
  const descInput = getEl('taskDescription');
  const deadlineInput = getEl('taskDeadline');

  if (titleInput) {
    titleInput.value = taskTitle;
  }
  if (descInput) {
    descInput.value = taskDesc.trim();
  }

  const attributedMetaItem = taskCard.querySelector('.task-meta .meta-item:nth-child(2)');
  const attributedText = attributedMetaItem ? attributedMetaItem.textContent.trim() : '';
  const studentName = attributedText.replace(/^Assigné à:\s*/i, '').trim();

  const taskMetaSection = getEl('taskMetaSection');
  const taskAttributedBy = getEl('taskAttributedBy');
  if (taskMetaSection) {
    taskMetaSection.hidden = false;
  }
  if (taskAttributedBy) {
    // Tutor creates tasks; attribution is the tutor (self), not the student
    const userName = getCurrentUserName();
    taskAttributedBy.textContent = userName ? `Assigné par: ${userName}` : 'Assigné par: —';
  }

  if (modal) {
    const studentDropdown = modal.querySelector('#taskStudentDropdown');
    if (studentDropdown) {
      const studentToggle = studentDropdown.querySelector('.dropdown-toggle');
      const studentItems = studentDropdown.querySelectorAll('.dropdown-item');
      studentItems.forEach((item) => {
        item.classList.remove('selected');
        if (item.textContent.trim() === studentName) {
          item.classList.add('selected');
        }
      });
      if (studentToggle) {
        studentToggle.textContent = studentName;
      }
    }
  }

  if (deadlineInput) {
    const isoDate = parseDeadlineDate(deadlineText);
    if (isoDate) {
      deadlineInput.value = isoDate;
    }
  }

  if (modal) {
    const priorityDropdown = modal.querySelector('#taskPriorityDropdown');
    const priorityText = priority === 'low' ? 'Basse' : priority === 'high' ? 'Haute' : 'Normal';
    if (priorityDropdown) {
      const priorityToggle = priorityDropdown.querySelector('.dropdown-toggle');
      const priorityItems = priorityDropdown.querySelectorAll('.dropdown-item');
      priorityItems.forEach((item) => {
        item.classList.remove('selected');
        if (item.textContent.trim() === priorityText) {
          item.classList.add('selected');
        }
      });
      if (priorityToggle) {
        priorityToggle.textContent = priorityText;
      }
    }

    modal.classList.add('active');
  }
  if (backdrop) {
    backdrop.classList.add('active');
  }
  if (modal) {
    modal.dataset.mode = 'edit';
  }
  if (modalTitleEl) {
    modalTitleEl.textContent = 'Modifier la tâche';
  }
  if (submitBtn) {
    submitBtn.textContent = 'Enregistrer les modifications';
    submitBtn.dataset.action = 'edit';
  }
};

// Wire up buttons
const createTaskBtn = getEl('createTaskBtn');
if (createTaskBtn) {
  createTaskBtn.addEventListener('click', openModalForCreate);
}

const closeModalBtn = getEl('closeModalBtn');
const cancelTaskBtn = getEl('cancelTaskBtn');
[closeModalBtn, cancelTaskBtn].forEach((el) => {
  if (el) {
    el.addEventListener('click', closeModal);
  }
});

if (backdrop) {
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });
}

if (submitBtn) {
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const taskTitle = getEl('taskTitle')?.value;
    const taskDeadline = getEl('taskDeadline')?.value;
    const selectedStudent = modal
      ? modal.querySelector('#taskStudentDropdown .dropdown-item.selected')?.textContent ||
        modal.querySelector('#taskStudentDropdown .dropdown-toggle')?.textContent
      : '';

    if (taskTitle && taskDeadline && selectedStudent !== '-- Sélectionner un élève --') {
      if (modal && modal.dataset.mode === 'edit') {
        showToast(
          '<img src="../../assets/icons/pencil.svg" alt="" class="icon-sm" />',
          'Tâche modifiée',
          'Les modifications ont été enregistrées'
        );
      } else {
        showToast(
          '<img src="../../assets/icons/check.svg" alt="" class="icon-sm" />',
          'Tâche créée',
          'Une nouvelle tâche a été créée'
        );
      }
      closeModal();
    } else {
      showToast(
        '<img src="../../assets/icons/alert-triangle.svg" alt="" class="icon-sm" />',
        'Erreur',
        'Veuillez remplir tous les champs obligatoires'
      );
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.classList.contains('active')) {
    closeModal();
  }
});

// Init dropdowns (page + modal: sort, student, priority)
initDropdowns();

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
