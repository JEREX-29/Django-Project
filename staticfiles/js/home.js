// ** Navigation Bar */

const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

//** Navigation Bar End */  

// Explore Now Effect

const exploreBtn = document.getElementById('explore-btn');
  const floatingMsg = document.getElementById('floating-msg');

  exploreBtn.addEventListener('click', () => {
    floatingMsg.classList.remove('hidden');
  });

  // Hide floating message on any screen click (outside message)
  document.addEventListener('click', function (e) {
    if (!floatingMsg.classList.contains('hidden') && !floatingMsg.contains(e.target) && e.target !== exploreBtn) {
      floatingMsg.classList.add('hidden');
    }
  });

// Explore Now Effect End

//** 3D IMG */

document.querySelectorAll('.futuristic-image-container').forEach(container => {
    const image = container.querySelector('.futuristic-image');
  
    container.addEventListener('mousemove', e => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // X-coordinate relative to the container
      const y = e.clientY - rect.top; // Y-coordinate relative to the container
      const centerX = rect.width / 2; // Center of the container on the X-axis
      const centerY = rect.height / 2; // Center of the container on the Y-axis
  
      const rotateX = ((y - centerY) / centerY) * 15; // Rotate along X-axis
      const rotateY = ((x - centerX) / centerX) * -15; // Rotate along Y-axis
  
      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  
    container.addEventListener('mouseleave', () => {
      image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
  
//** 3D IMG END */

//** FAQ */

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    
    document.querySelectorAll('.faq-answer').forEach(a => (a.style.display = 'none'));
    document.querySelectorAll('.faq-question span').forEach(s => (s.textContent = '+'));

    if (!isOpen) {
      answer.style.display = 'block';
      button.querySelector('span').textContent = '-';
    }
  });
});


//** FAQ END */