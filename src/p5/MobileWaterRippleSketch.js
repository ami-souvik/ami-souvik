let cols, rows;
let current;
let previous;
let damping = 0.97;
let bgColor, rippleColor;
let frameRateElement;

export const MobileWaterRippleSketch = ({ mode, sectionHeight,  p }) => {

  p.setup = () => {
    p.createCanvas(p.windowWidth, sectionHeight).id('water-ripple-canvas');
    p.pixelDensity(1);
    cols = p.width;
    rows = p.height;

    current = new Array(cols * rows).fill(0);
    previous = new Array(cols * rows).fill(0);
    updateColors(mode);

    frameRateElement = p.createDiv('');
    frameRateElement.position(10, 10);
    frameRateElement.style('color', '#ffffff');
    frameRateElement.style('font-size', '20px');
  };

  p.draw = () => {
    p.background(bgColor);

    for (let i = 1; i < cols - 1; i++) {
      for (let j = 1; j < rows - 1; j++) {
        let index = i + j * cols;
        current[index] =
          (previous[index - 1] + previous[index + 1] + previous[index - cols] + previous[index + cols]) / 2 -
          current[index];
        current[index] *= damping;
      }
    }

    p.loadPixels();
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        let index = x + y * cols;
        let bright = p.red(bgColor) - current[index] * 255;
        p.pixels[index * 4 + 0] = bright;
        p.pixels[index * 4 + 1] = bright;
        p.pixels[index * 4 + 2] = bright;
        p.pixels[index * 4 + 3] = 255;
      }
    }
    p.updatePixels();

    let temp = previous;
    previous = current;
    current = temp;

    frameRateElement.html('Frame Rate: ' + Math.round(p.frameRate()));
  };

  p.touchStarted = () => {
    if (p.touches.length === 1) {
      let x = p.touches[0].x;
      let y = p.touches[0].y;
      if (x > 0 && x < cols && y > 0 && y < rows) {
        previous[x + y * cols] = 500;
      }
    }
    return false; // Prevent default
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    cols = p.width;
    rows = p.height;

    current = new Array(cols * rows).fill(0);
    previous = new Array(cols * rows).fill(0);
  };

  function updateColors(mode) {
    if (mode === 'dark') {
	  bgColor = p.color(18);
	  rippleColor = p.color(255);
    } else {
	  bgColor = p.color(255);
	  rippleColor = p.color(18);
    }
  }
};
