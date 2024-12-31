const timerElement = document.getElementById('timer');
const newYear = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = newYear - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    timerElement.innerHTML = "Happy New Year!";
  }
}

setInterval(updateCountdown, 1000);

// Interactive Drawing Canvas
const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

let drawing = false;

canvas.addEventListener('mousedown', () => (drawing = true));
canvas.addEventListener('mouseup', () => (drawing = false));
canvas.addEventListener('mousemove', draw);

function draw(event) {
  if (!drawing) return;

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, 3, 0, Math.PI * 2);
  ctx.fill();
}

function createFireworks() {
  const fireworksContainer = document.querySelector('.fireworks-container');

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      
      // Randomize position
      firework.style.top = `${Math.random() * 100}vh`;
      firework.style.left = `${Math.random() * 100}vw`;
      
      // Randomize colors
      firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      
      // Append the firework to the container
      fireworksContainer.appendChild(firework);

      // Remove the firework after the animation ends
      setTimeout(() => {
        fireworksContainer.removeChild(firework);
      }, 1000);
    }, Math.random() * 1000); // Random delay between fireworks
  }
}

// Trigger fireworks every few seconds
setInterval(createFireworks, 1500);