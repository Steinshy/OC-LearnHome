/**
 * Show a toast notification.
 * @param {string} icon - HTML string for the icon
 * @param {string} title - Toast title
 * @param {string} message - Toast message
 * @param {string} [type='info'] - Toast type: info, success, error, warning
 */
export const showToast = (icon, title, message, type = 'info') => {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');

  // Auto-detect type from icon if not explicitly provided
  let resolvedType = type;
  if (resolvedType === 'info') {
    if (icon.includes('check.svg') || icon.includes('✅') || icon.includes('✓')) {
      resolvedType = 'success';
    } else if (
      icon.includes('trash-2.svg') ||
      icon.includes('alert-triangle.svg') ||
      icon.includes('❌') ||
      icon.includes('🗑️') ||
      icon.includes('⚠️')
    ) {
      resolvedType = 'error';
    } else if (icon.includes('bell.svg') || icon.includes('🔔')) {
      resolvedType = 'warning';
    }
  }

  toast.className = `toast ${resolvedType}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <div class="toast-header">
      <span class="toast-icon">${icon}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Fermer">×</button>
    </div>
    <div class="toast-progress"></div>
  `;

  // Close button handler
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });

  container.append(toast);

  let timeoutId;
  const startDismiss = () => {
    timeoutId = setTimeout(() => {
      toast.classList.add('dismissing');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2700);
  };

  // Pause on hover
  toast.addEventListener('mouseenter', () => {
    toast.classList.add('paused');
    clearTimeout(timeoutId);
  });

  toast.addEventListener('mouseleave', () => {
    toast.classList.remove('paused');
    startDismiss();
  });

  startDismiss();
};
