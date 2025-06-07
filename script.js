const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');
const pixelSize = 20;

function draw(e) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / pixelSize);
  const y = Math.floor((e.clientY - rect.top) / pixelSize);
  ctx.fillStyle = colorPicker.value;
  ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}

canvas.addEventListener('mousedown', draw);
canvas.addEventListener('mousemove', (e) => {
  if (e.buttons) draw(e);
});

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
