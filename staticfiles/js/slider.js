  document.querySelectorAll('#nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const nav = document.querySelector('#nav');
      if (nav.classList.contains('active')) return;

      // Remove focus class and set current one
      document.querySelectorAll('#nav .focus').forEach(f => f.classList.remove('focus'));
      this.classList.add('focus');
      nav.classList.add('active');

      const target = parseInt(this.getAttribute('data-slide'));
      const slideNames = ['one', 'two', 'three', 'four'];
      const slider = document.querySelector('.slider-inner');

      let currentName = slider.className.match(/rotate (\w+)/)?.[1] || 'one';
      let current = slideNames.indexOf(currentName) + 1;

      // Handle slide activation visually
      document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
      document.querySelector(`.slide[data-slide="${target}"]`).classList.add('active');

      // Determine direction and path of rotation
      const step = target > current ? 1 : -1;
      const path = [];

      for (let i = current + step; step > 0 ? i <= target : i >= target; i += step) {
        path.push(slideNames[i - 1]);
      }

      // Animate each step in path with delay
      path.forEach((name, index) => {
        setTimeout(() => {
          slider.className = `slider-inner rotate ${name}`;
        }, index * 300); // 300ms per rotation step
      });

      // Remove nav active class after animation ends
      setTimeout(() => nav.classList.remove('active'), path.length * 300);
    });
  });

  // DEMO: Auto-rotation on page load
  setTimeout(() => document.querySelector('#nav a[data-slide="2"]').click(), 500);
  setTimeout(() => document.querySelector('#nav a[data-slide="4"]').click(), 1400);
  setTimeout(() => document.querySelector('#nav a[data-slide="1"]').click(), 2500);