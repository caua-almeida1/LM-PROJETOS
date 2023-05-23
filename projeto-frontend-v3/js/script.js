const darkmodeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkmodeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (darkmodeToggle.classList.contains('bx-sun')) {
    darkmodeToggle.classList.replace('bx-sun', 'bx-moon');
  } else {
    darkmodeToggle.classList.replace('bx-moon', 'bx-sun');
  }
});
