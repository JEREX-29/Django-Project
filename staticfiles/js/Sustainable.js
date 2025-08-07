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

// Navigationbar Button End

let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

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