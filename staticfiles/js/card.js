// Show card with cinematic effect
function jrxToggleCard() {
  const card = document.getElementById("jrxPopupCard");
  const cardBox = card.querySelector(".jrx-card");

  card.classList.add("active");
  cardBox.style.animation = "cyber3dOpen 0.8s ease-in-out forwards";

  // Reset tilt on open
  cardBox.style.setProperty("--rotateX", `0deg`);
  cardBox.style.setProperty("--rotateY", `0deg`);
}

// Close card with animation
function jrxCloseCard() {
  const card = document.getElementById("jrxPopupCard");
  const cardBox = card.querySelector(".jrx-card");

  cardBox.style.animation = "cyber3dClose 0.6s ease-in-out forwards";

  // Hide after animation completes
  setTimeout(() => {
    card.classList.remove("active");
  }, 550);
}

// Add interactive 3D hover effect
document.addEventListener("mousemove", (e) => {
  const card = document.querySelector(".jrx-card");
  if (!card || !card.offsetParent) return;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.setProperty("--rotateX", `${rotateX}deg`);
  card.style.setProperty("--rotateY", `${rotateY}deg`);
});

// Reset rotation on mouse leave
document.addEventListener("mouseleave", () => {
  const card = document.querySelector(".jrx-card");
  if (card) {
    card.style.setProperty("--rotateX", `0deg`);
    card.style.setProperty("--rotateY", `0deg`);
  }
});
