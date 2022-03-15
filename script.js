// feedback current value Pixel Size

const pixelSize = document.querySelector('#pixel-size');
const output = document.querySelector('.pixel-output');

output.textContent = pixelSize.value;

pixelSize.addEventListener('input', function() {
  output.textContent = pixelSize.value;
});

// 16x16 grid
const sixteenBtn = document.querySelector('#sixteen-btn');
sixteenBtn.addEventListener('click', sixteenDiv);

function sixteenDiv() {
  for (let i = 0; i < 256; i++) {
    const square = document.querySelector('#square');
    const createDiv = document.createElement('div');
    createDiv.style.width = '32px';
    createDiv.style.height = '32px';
    square.appendChild(createDiv)[i]
  }
}

// 32x32 button
const thirtyTwoBtn = document.querySelector('#thirty-two-btn');
thirtyTwoBtn.addEventListener('click', thirtyTwoDiv);

function thirtyTwoDiv() {
  for (let i = 0; i < 1024; i++) {
    const square = document.querySelector('#square');
    const createDiv = document.createElement('div');
    createDiv.style.width = '16px';
    createDiv.style.height = '16px';
    square.appendChild(createDiv)[i]
  }
}
