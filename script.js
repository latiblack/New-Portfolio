document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      toggle.classList.remove('active');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});