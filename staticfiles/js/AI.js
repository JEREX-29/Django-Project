// Progress Bar

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute("data-percent");
                bar.style.height = percent + "%";
                observer.unobserve(bar); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of element is visible

    progressBars.forEach(bar => observer.observe(bar));
});

/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector(".text-container");
    
    function checkScroll() {
        const sectionPosition = textContainer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            textContainer.classList.add("visible");
        }
    }
    
    window.addEventListener("scroll", checkScroll);
});

// Navbar

const toggleButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Optional: Click outside to auto close
  document.addEventListener('click', (e) => {
    if (!toggleButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

