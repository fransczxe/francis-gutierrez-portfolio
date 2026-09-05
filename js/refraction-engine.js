// Apple VisionOS-inspired Liquid Refraction Cursor Follower

document.addEventListener('DOMContentLoaded', () => {
  const lens = document.getElementById('refractionLens');

  // Smooth cursor follow with velocity dampening
  let mouseX = 0, mouseY = 0;
  let lensX = 0, lensY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateLens() {
    lensX += (mouseX - lensX) * 0.15;
    lensY += (mouseY - lensY) * 0.15;

    if (lens) {
      lens.style.left = `${lensX}px`;
      lens.style.top = `${lensY}px`;
    }

    requestAnimationFrame(animateLens);
  }

  animateLens();

  // Dynamic light refraction inside glass cards on hover
  document.addEventListener('mousemove', (e) => {
    const panels = document.querySelectorAll('.glass-panel');
    panels.forEach(panel => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      panel.style.setProperty('--mouse-x', `${x}px`);
      panel.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});