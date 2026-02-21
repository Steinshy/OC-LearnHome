/**
 * Initialize all custom dropdown components within a container.
 * Provides full keyboard support: ArrowUp/Down, Enter, Escape.
 * @param {Element} [container=document] - The container to search within
 */
export function initDropdowns(container = document) {
  container.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    const items = dropdown.querySelectorAll('.dropdown-item');
    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    if (!toggle || !menu) {
      return;
    }

    const openDropdown = () => {
      dropdown.classList.add('open');
    };

    const closeDropdown = () => {
      dropdown.classList.remove('open');
      toggle.focus();
    };

    const selectItem = (item) => {
      items.forEach((i) => i.classList.remove('selected'));
      item.classList.add('selected');
      toggle.textContent = item.textContent.trim();
      closeDropdown();
    };

    // Toggle: click and keyboard
    toggle.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });

    toggle.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowUp': {
          e.preventDefault();
          openDropdown();
          const target = e.key === 'ArrowDown' ? firstItem : lastItem;
          if (target) {
            target.focus();
          }
          break;
        }
        case 'Escape': {
          e.preventDefault();
          const wasOpen = dropdown.classList.contains('open');
          closeDropdown();
          if (wasOpen) {
            e.stopPropagation();
          }
          break;
        }
        default:
          break;
      }
    });

    items.forEach((item) => {
      item.addEventListener('click', () => {
        selectItem(item);
      });

      item.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'Enter':
          case ' ': {
            e.preventDefault();
            selectItem(item);
            break;
          }
          case 'ArrowDown': {
            e.preventDefault();
            const next = item.nextElementSibling;
            if (next) {
              next.focus();
            } else if (firstItem) {
              firstItem.focus();
            }
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            const prev = item.previousElementSibling;
            if (prev) {
              prev.focus();
            } else if (lastItem) {
              lastItem.focus();
            }
            break;
          }
          case 'Home': {
            e.preventDefault();
            if (firstItem) {
              firstItem.focus();
            }
            break;
          }
          case 'End': {
            e.preventDefault();
            if (lastItem) {
              lastItem.focus();
            }
            break;
          }
          case 'Escape': {
            e.preventDefault();
            const wasOpen = dropdown.classList.contains('open');
            closeDropdown();
            if (wasOpen) {
              e.stopPropagation();
            }
            break;
          }
          default:
            break;
        }
      });
    });
  });

  // Close dropdowns when clicking outside (attach once)
  if (!initDropdowns._outsideClickBound) {
    initDropdowns._outsideClickBound = true;
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.custom-dropdown')) {
        document.querySelectorAll('.custom-dropdown.open').forEach((dropdown) => {
          dropdown.classList.remove('open');
        });
      }
    });
  }
}
