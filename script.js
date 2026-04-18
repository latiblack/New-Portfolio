document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggle.classList.toggle('active');
    document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-card, .project-card, .achievement-card, .section-tag').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});