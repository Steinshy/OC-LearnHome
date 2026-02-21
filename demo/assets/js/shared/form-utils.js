/**
 * Parse a French date string (e.g. "10 janvier 2026") to ISO format (YYYY-MM-DD).
 * @param {string} dateString - French date string
 * @returns {string} ISO date string
 */
const MONTH_MAP = {
  janvier: '01',
  février: '02',
  mars: '03',
  avril: '04',
  mai: '05',
  juin: '06',
  juillet: '07',
  août: '08',
  septembre: '09',
  octobre: '10',
  novembre: '11',
  décembre: '12',
};

/** French month names for regex (order: longer first to avoid partial matches) */
const MONTH_PATTERN =
  '(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)';

/**
 * Parse a French date string from meta-item (e.g. "Échéance: 10 janvier 2026", " 10 janvier 2026")
 * to ISO format (YYYY-MM-DD).
 * @param {string} dateString - Raw text from meta-item
 * @returns {string} ISO date string or '' if not parseable
 */
export const parseDeadlineDate = (dateString) => {
  if (!dateString || typeof dateString !== 'string') {
    return '';
  }
  // Extract "DD mois YYYY" pattern anywhere in the string (robust to prefixes/whitespace)
  const re = new RegExp(`(\\d{1,2})\\s+${MONTH_PATTERN}\\s+(\\d{4})`, 'i');
  const match = dateString.match(re);
  if (!match) {
    return '';
  }
  const day = match[1].padStart(2, '0');
  const month = MONTH_MAP[match[2].toLowerCase()];
  const year = match[3];
  if (!month) {
    return '';
  }
  return `${year}-${month}-${day}`;
};

/**
 * Initialize a character counter for an input/textarea.
 * @param {HTMLElement} input - The input element
 * @param {HTMLElement} counterEl - The counter display element
 * @param {number} maxLength - Maximum allowed length
 * @param {Function} [onOverflow] - Optional callback when limit exceeded
 */
export function initCharCounter(input, counterEl, maxLength, onOverflow) {
  if (!input || !counterEl) {
    return;
  }
  input.addEventListener('input', () => {
    counterEl.textContent = input.value.length;
    if (onOverflow && input.value.length >= maxLength) {
      onOverflow();
    }
  });
}
