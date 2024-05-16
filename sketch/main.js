let cols, rows;
let current;
let previous;
let damping = 0.95;
let rippleSpeed = 2;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('water-ripple-canvas');
  pixelDensity(1);
  cols = width;
  rows = height;

  current = new Array(cols * rows).fill(0);
  previous = new Array(cols * rows).fill(0);
  // Add listener for color scheme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateColors);
}

function draw() {
  background(255);

  // Calculate new values
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      let index = i + j * cols;
      current[index] = (
        previous[index - 1] +
        previous[index + 1] +
        previous[index - cols] +
        previous[index + cols]
      ) / 2 - current[index];
      current[index] *= damping;
    }
  }

  loadPixels();
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let index = x + y * cols;
      let bright = 255 - current[index] * 255; // Invert brightness
      pixels[index * 4 + 0] = bright;
      pixels[index * 4 + 1] = bright;
      pixels[index * 4 + 2] = bright;
      pixels[index * 4 + 3] = 255;
    }
  }
  updatePixels();

  // Swap buffers
  let temp = previous;
  previous = current;
  current = temp;
}

function mousePressed() {
  let x = mouseX;
  let y = mouseY;
  if (x > 0 && x < cols && y > 0 && y < rows) {
    previous[x + y * cols] = 500;
  }
}

function updateColors() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode
    bgColor = color(0); // Background color: black
    rippleColor = color(255); // Ripple color: white
  } else {
    // Light mode
    bgColor = color(255); // Background color: white
    rippleColor = color(0); // Ripple color: black
  }
}