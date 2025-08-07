// Navigationbar Button

const button = document.getElementById('menu-button');

const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('invisible');
    menu.classList.toggle('scale-95');
    menu.classList.toggle('scale-100');
});

document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add('opacity-0', 'invisible', 'scale-95');
        menu.classList.remove('scale-100');
    }
});

        const menu = document.getElementById('menu');

        button.addEventListener('click', () => {
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('invisible');
            menu.classList.toggle('scale-95');
            menu.classList.toggle('scale-100');
        });

        document.addEventListener('click', (event) => {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('opacity-0', 'invisible', 'scale-95');
                menu.classList.remove('scale-100');
            }
        });


// Navigationbar Button End

let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

// Function to apply slide changes
const setSlider = () => {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === active) {
            item.classList.add('active');
        }
    });

    // Show/hide navigation buttons responsively
    if (window.innerWidth <= 768) {
        prevBtn.classList.remove('d-none');
        nextBtn.classList.remove('d-none');
    } else {
        nextBtn.classList.toggle('d-none', active === lastPosition);
        prevBtn.classList.toggle('d-none', active === firstPosition);
    }
};

nextBtn.onclick = () => {
    if (active < lastPosition) {
        active++;
        setSlider();
    }
};

prevBtn.onclick = () => {
    if (active > firstPosition) {
        active--;
        setSlider();
    }
};

// Set slider diameter based on screen size for animations or design
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    if (!slider) return;

    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', `${diameter}px`);
};

// Initialize slider and diameter on load
window.addEventListener('DOMContentLoaded', () => {
    setSlider();
    setDiameter();
});

// Recalculate diameter on resize
window.addEventListener('resize', () => {
    setDiameter();
    setSlider();
});

nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}
prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    // 
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}
setSlider();

// set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter+'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})

