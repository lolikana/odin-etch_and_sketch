const canvasSize = 512;
const square = document.querySelector('#square');

const createElementDiv = sizeValue => {
  for (let i = 0; i < sizeValue * sizeValue; i++) {
    const createDiv = document.createElement('div');
    createDiv.style.width = canvasSize / sizeValue + 'px';
    createDiv.style.height = canvasSize / sizeValue + 'px';
    createDiv.classList.add('square-div');
    square.appendChild(createDiv)[i];
  }

  // changeBgStyle();
};

// default size

createElementDiv(4);

// Active btn reset canvas //

const selectClearBtn = document.getElementById('reset-btn');

selectClearBtn.addEventListener('click', function () {
  document.getElementById('square').textContent = '';
  createElementDiv(8);
});

// Select size btn and clear canvas and create div //

const selectSizeBtn = document.getElementsByClassName('size-btn');

for (let i = 0; i < selectSizeBtn.length; i++) {
  selectSizeBtn[i].addEventListener(
    'click',
    (setSizeDiv = () => {
      const selectSizeValue =
        document.getElementsByClassName('size-span')[i].innerHTML;
      document.getElementById('square').textContent = '';
      createElementDiv(selectSizeValue);
    })
  );
}

// Range slider update size //

// // const rangePixelSize = document.querySelector('#range-size');
// // const output = document.querySelector('.range-output');

// // output.textContent = rangePixelSize.value + ' x ' + rangePixelSize.value;

// // rangePixelSize.addEventListener('input', function() {
// //   const getRangeValue = rangePixelSize.value;
// //   output.textContent = rangePixelSize.value + ' x ' + rangePixelSize.value;

// //   document.getElementById('square').textContent = '';

// //   createElementDiv(getRangeValue);
// // });

// Custom slider range step update size //
const rangePixelSize = document.querySelector('#range-size');
const output = document.querySelector('.range-output');

let customRangeValues = [4, 8, 16, 32, 64];

rangePixelSize.oninput = function (e) {
  output.textContent =
    customRangeValues[this.value] + ' x ' + customRangeValues[this.value];
  rangePixelSize.max = customRangeValues.length - 1;
};

rangePixelSize.oninput();

rangePixelSize.addEventListener('input', function () {
  const getRangeValue = customRangeValues[this.value];
  document.getElementById('square').textContent = '';
  createElementDiv(getRangeValue);
});

// Function drawing
let colorTrigger = false;
square.addEventListener('mousedown', () => {
  colorTrigger = true;
});

// prevent keep mouseup = false after mouseout of square
// then mouseup and go back to squareDiv
const selectBody = document.querySelector('body');
selectBody.addEventListener('mouseup', () => {
  colorTrigger = false;
});

const getSquareDiv = document.getElementsByClassName('square-div');
const selectDrawBtn = document.getElementById('draw-btn');

selectDrawBtn.addEventListener(
  'click',
  (drawBg = () => {
    for (let i = 0; i < getSquareDiv.length; i++) {
      getSquareDiv[i].addEventListener(
        'mousedown',
        (setBackground = () => {
          getSquareDiv[i].style.backgroundColor = 'black';
        })
      );

      getSquareDiv[i].addEventListener(
        'mousemove',
        (setBackground = () => {
          if (colorTrigger === true) {
            getSquareDiv[i].style.backgroundColor = 'black';
          }
        })
      );
    }
  })
);

// function Eraser //
const selectEraserBtn = document.getElementById('eraser-btn');
selectEraserBtn.addEventListener(
  'click',
  (eraseBg = () => {
    for (let i = 0; i < getSquareDiv.length; i++) {
      getSquareDiv[i].addEventListener(
        'mousedown',
        (setBackground = () => {
          getSquareDiv[i].style.backgroundColor = '';
        })
      );

      getSquareDiv[i].addEventListener(
        'mousemove',
        (setBackground = () => {
          if (colorTrigger === true) {
            getSquareDiv[i].style.backgroundColor = '';
          }
        })
      );
    }
  })
);

const selectRaindowBtn = document.getElementById('rainbow-btn');
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

selectRaindowBtn.addEventListener(
  'click',
  (rainbowBg = () => {
    for (let i = 0; i < getSquareDiv.length; i++) {
      getSquareDiv[i].addEventListener(
        'mousedown',
        (setBackground = () => {
          getSquareDiv[i].style.backgroundColor = '#' + randomColor;
        })
      );

      getSquareDiv[i].addEventListener(
        'mousemove',
        (setBackground = () => {
          if (colorTrigger === true) {
            getSquareDiv[i].style.backgroundColor = '#' + randomColor;
          }
        })
      );
    }
  })
);
