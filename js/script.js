
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', function() {
    nav.style.transition="transform 0.3s"
    nav.classList.toggle('open');
    burger.classList.toggle('active');
  });
