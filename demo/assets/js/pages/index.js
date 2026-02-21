const switchRole = (role) => {
  document.querySelectorAll('.role-btn').forEach((roleBtn) => {
    roleBtn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-role="${role}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  ['student', 'tutor'].forEach((sectionRole) => {
    const section = document.getElementById(`section-${sectionRole}`);
    if (section) {
      section.classList.toggle('section-hidden', sectionRole !== role);
    }
  });
  localStorage.setItem('selectedRole', role);
};

document.addEventListener('DOMContentLoaded', () => {
  switchRole(localStorage.getItem('selectedRole') || 'student');

  document.querySelectorAll('.role-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role;
      if (role) {
        switchRole(role);
      }
    });
  });
});
