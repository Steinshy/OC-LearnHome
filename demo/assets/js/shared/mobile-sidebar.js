/**
 * Initialize mobile sidebar toggle functionality.
 * Looks for #menuBtn, #closeBtn, #sidebar, and #sidebarOverlay elements.
 */
export function initMobileSidebar() {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (!menuBtn || !sidebar) {
    return;
  }

  const openSidebar = () => {
    sidebar.classList.add('open');
    if (overlay) {
      overlay.classList.add('active');
    }
  };

  const closeSidebar = () => {
    sidebar.classList.remove('open');
    if (overlay) {
      overlay.classList.remove('active');
    }
  };

  menuBtn.addEventListener('click', openSidebar);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
}
