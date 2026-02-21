import { openModal, closeModal, initModalDismiss } from '../shared/modal.js';
import { initMobileSidebar } from '../shared/mobile-sidebar.js';

// -- File upload & message send --
const handleAttachmentClick = () => {
  const fileInput = document.getElementById('file-input');
  if (fileInput) {
    fileInput.click();
  }
};

const handleMessageSend = () => {
  const hiddenMsg = document.querySelector('.hidden-auto-message');
  if (hiddenMsg) {
    hiddenMsg.classList.add('visible');
  }
};

const handleFileUpload = () => {
  const input = document.getElementById('file-input');
  const fileMessage = document.querySelector('.hidden-file-message');
  const fileNameSpan = document.querySelector('.message-file-name');
  const messages = document.querySelector('.messages');

  if (input && fileNameSpan && fileMessage) {
    const file = input.files[0];
    fileNameSpan.textContent = file ? file.name : '';
    fileMessage.classList.add('visible');
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  }
};

// Wire up chat input area
const attachmentBtn = document.getElementById('attachment-btn');
if (attachmentBtn) {
  attachmentBtn.addEventListener('click', handleAttachmentClick);
}

const fileInput = document.getElementById('file-input');
if (fileInput) {
  fileInput.addEventListener('change', handleFileUpload);
}

const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', handleMessageSend);
}

// -- Modals (contacts, info, phone, video) --
initModalDismiss();

// Wire up add-contact-btn to open contacts modal (no onclick in HTML)
document.querySelectorAll('.add-contact-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal('contacts-modal');
    contactManager.filterContacts(document.querySelector('.modal-search')?.value || '');
  });
});

// Wire up modal close icons (X button) - close parent modal-overlay
document.querySelectorAll('.modal-overlay .modal-close-icon').forEach((btn) => {
  btn.addEventListener('click', () => {
    const overlay = btn.closest('.modal-overlay');
    if (overlay && overlay.id) {
      closeModal(overlay.id);
    }
  });
});

// Fallback: wire modal open/close from onclick attributes if present
document.querySelectorAll('[onclick*="openModal"]').forEach((el) => {
  const match = el.getAttribute('onclick').match(/openModal\(['"]([^'"]+)['"]\)/);
  if (match) {
    const modalId = match[1];
    el.removeAttribute('onclick');
    el.addEventListener('click', () => openModal(modalId));
  }
});
document.querySelectorAll('[onclick*="closeModal"]').forEach((el) => {
  const match = el.getAttribute('onclick').match(/closeModal\(['"]([^'"]+)['"]\)/);
  if (match) {
    const modalId = match[1];
    el.removeAttribute('onclick');
    el.addEventListener('click', () => closeModal(modalId));
  }
});

// -- Contact Manager --
const contactManager = {
  rows() {
    return [...document.querySelectorAll('.contacts-list-modal .contact-row:not(.no-contact-found)')];
  },
  hiddenRows() {
    return this.rows().find((row) => row.classList.contains('hidden'));
  },
  noContactFound() {
    return document.querySelector('.contacts-list-modal .no-contact-found');
  },
  update() {
    const addBtn = document.getElementById('add-contact-confirm');
    if (addBtn) {
      addBtn.disabled = !this.rows().some((row) => row.classList.contains('hidden'));
    }
  },
  filterContacts(query) {
    const q = (query || '').trim().toLowerCase();
    const inList = this.rows().filter((row) => !row.classList.contains('hidden'));
    let visibleCount = 0;
    inList.forEach((row) => {
      const name = (row.dataset.name || row.querySelector('.modal-name')?.textContent || '').toLowerCase();
      const isMatch = !q || name.includes(q);
      row.classList.toggle('search-hidden', !isMatch);
      if (isMatch) {
        visibleCount++;
      }
    });
    const noFound = this.noContactFound();
    if (noFound) {
      // Show "Aucun contact trouvé" when list is empty OR search yields no results
      noFound.classList.toggle('hidden', visibleCount > 0);
    }
  },
  addContact() {
    const hiddenRow = this.hiddenRows();
    if (hiddenRow) {
      hiddenRow.classList.remove('hidden');
      hiddenRow.style.display = 'flex';
      hiddenRow.classList.remove('search-hidden');
      this.filterContacts(document.querySelector('.modal-search')?.value || '');
      this.update();
    }
  },
  removeContact(btn) {
    const row = btn.closest('.contact-row');
    if (row) {
      row.classList.add('hidden');
      row.style.display = 'none';
      this.filterContacts(document.querySelector('.modal-search')?.value || '');
      this.update();
    }
  },
};

contactManager.update();

// Wire up remove contact buttons (no onclick in HTML)
document.querySelectorAll('.remove-contact-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    contactManager.removeContact(btn);
  });
});

// Wire up add contact confirm button (no onclick in HTML)
const addContactConfirm = document.getElementById('add-contact-confirm');
if (addContactConfirm) {
  addContactConfirm.addEventListener('click', () => {
    contactManager.addContact();
  });
}

// Fallback: wire from onclick if present
document.querySelectorAll('[onclick*="contactManager.removeContact"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', () => contactManager.removeContact(el));
});
document.querySelectorAll('[onclick*="contactManager.addContact"]').forEach((el) => {
  el.removeAttribute('onclick');
  el.addEventListener('click', () => contactManager.addContact());
});

const modalSearch = document.querySelector('.modal-search');
if (modalSearch) {
  // Remove inline oninput
  modalSearch.removeAttribute('oninput');
  modalSearch.addEventListener('input', () => {
    contactManager.filterContacts(modalSearch.value);
  });
}

// -- Mobile chat: contacts/info panels --
const contactsBtn = document.getElementById('contactsBtn');
const closeContactsBtn = document.getElementById('closeContactsBtn');
const contactsPanel = document.getElementById('contactsPanel');
const infoBtn = document.getElementById('infoBtn');
const closeInfoBtn = document.getElementById('closeInfoBtn');
const infoPanel = document.getElementById('infoPanel');
const panelOverlay = document.getElementById('overlay');

if (contactsBtn && contactsPanel && panelOverlay) {
  const openPanel = (panel) => {
    panel.classList.add('open');
    panelOverlay.classList.add('active');
  };

  const closePanel = (panel) => {
    panel.classList.remove('open');
    panelOverlay.classList.remove('active');
  };

  contactsBtn.addEventListener('click', () => {
    if (infoPanel) {
      closePanel(infoPanel);
    }
    openPanel(contactsPanel);
    contactManager.filterContacts(document.querySelector('.modal-search')?.value || '');
  });

  if (closeContactsBtn) {
    closeContactsBtn.addEventListener('click', () => {
      closePanel(contactsPanel);
    });
  }

  if (infoBtn && infoPanel) {
    infoBtn.addEventListener('click', () => {
      closePanel(contactsPanel);
      openPanel(infoPanel);
    });
  }

  if (closeInfoBtn && infoPanel) {
    closeInfoBtn.addEventListener('click', () => {
      closePanel(infoPanel);
    });
  }

  panelOverlay.addEventListener('click', () => {
    closePanel(contactsPanel);
    if (infoPanel) {
      closePanel(infoPanel);
    }
  });
}

// -- Desktop chat: info button opens info-modal (mobile uses infoPanel) --
const infoModal = document.getElementById('info-modal');
if (infoBtn && infoModal && !infoPanel) {
  infoBtn.addEventListener('click', () => {
    openModal('info-modal');
  });
}

// -- Tutor desktop chat: task panel --
const taskBtn = document.getElementById('taskBtn');
const closeTaskBtn = document.getElementById('closeTaskBtn');
const taskPanel = document.getElementById('taskPanel');
const chatOverlay = panelOverlay || document.getElementById('overlay');

if (taskBtn && taskPanel) {
  const openPanel = (panel) => {
    panel.classList.add('open');
    if (chatOverlay) {
      chatOverlay.classList.add('active');
    }
  };

  const closePanel = (panel) => {
    panel.classList.remove('open');
    if (chatOverlay) {
      chatOverlay.classList.remove('active');
    }
  };

  taskBtn.addEventListener('click', () => {
    openPanel(taskPanel);
  });

  if (closeTaskBtn) {
    closeTaskBtn.addEventListener('click', () => {
      closePanel(taskPanel);
    });
  }

  if (chatOverlay) {
    chatOverlay.addEventListener('click', (e) => {
      if (e.target === chatOverlay) {
        closePanel(taskPanel);
      }
    });
  }
}

// Mobile sidebar
initMobileSidebar();
