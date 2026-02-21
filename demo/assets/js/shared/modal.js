/**
 * Open a modal by ID.
 * @param {string} id - The modal element ID
 */
export function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
  }
}

/**
 * Close a modal by ID.
 * @param {string} id - The modal element ID
 */
export function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('active');
  }
}

/**
 * Initialize backdrop click dismiss for all .modal-overlay elements.
 */
export function initModalDismiss() {
  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        if (overlay.id) {
          closeModal(overlay.id);
        } else {
          overlay.classList.remove('active');
        }
      }
    });
  });
}
