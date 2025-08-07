function toggleDropdown1() {
    closeAllDropdowns();
    document.getElementById("dropdown1").classList.toggle("active");
}
function toggleDropdown2() {
    closeAllDropdowns();
    document.getElementById("dropdown2").classList.toggle("active");
}
function toggleDropdown3() {
    closeAllDropdowns();
    document.getElementById("dropdown3").classList.toggle("active");
}
function toggleDropdown4() {
    closeAllDropdowns();
    document.getElementById("dropdown4").classList.toggle("active");
}
function toggleDropdown5() {
    closeAllDropdowns();
    document.getElementById("dropdown5").classList.toggle("active");
}
function toggleDropdown6() {
    closeAllDropdowns();
    document.getElementById("dropdown6").classList.toggle("active");
}
function closeAllDropdowns() {
    document.querySelectorAll(".question-box").forEach(box => {
        box.classList.remove("active");
    });
}