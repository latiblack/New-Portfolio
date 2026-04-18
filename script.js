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

  const text = "Hey, I'm Lati";
  const typedText = document.querySelector('.typed-text');
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});