const canvasSize = 512;
const defaultSize = 16;
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
createElementDiv(defaultSize);

// Reset Button
const selectClearBtn = document.getElementById('reset-btn');

selectClearBtn.addEventListener('click', function () {
  rangeOutput(defaultSize);
  square.textContent = '';
  createElementDiv(defaultSize);
  rangePixelSize.value = customRangeValues.indexOf(defaultSize);
});

// Select Size Button
const selectSizeBtn = document.getElementsByClassName('size-btn');

for (let i = 0; i < selectSizeBtn.length; i++) {
  selectSizeBtn[i].addEventListener(
    'click',
    (setSizeDiv = () => {
      const selectSizeValue = document.getElementsByClassName('size-span')[i].innerHTML;
      square.textContent = '';
      rangeOutput(selectSizeValue);
      createElementDiv(selectSizeValue);

      let selectRangeValue = customRangeValues.filter(value => value === +selectSizeValue);
      rangePixelSize.value = customRangeValues.indexOf(+selectRangeValue.join());
    })
  );
}

// Range slide custom
const rangeOutput = size => {
  output.textContent = size + ' x ' + size; //change range output
};

const rangePixelSize = document.querySelector('#range-size');
const output = document.querySelector('.range-output');

let customRangeValues = [4, 8, 16, 32, 64];

rangePixelSize.oninput = function () {
  rangeOutput(customRangeValues[this.value]);
  // rangePixelSize.max = customRangeValues.length - 1;
};

rangePixelSize.oninput();

rangePixelSize.addEventListener('input', function () {
  const getRangeValue = customRangeValues[this.value];
  square.textContent = '';
  createElementDiv(getRangeValue);
});

// Function draw when click
let colorTrigger = false;
square.addEventListener('mousedown', () => {
  colorTrigger = true;
});

// prevent keeping mouseup = false after mouseout of square and then mouseup and go back to squareDiv
const selectBody = document.querySelector('body');
selectBody.addEventListener('mouseup', () => {
  colorTrigger = false;
});

// function change background square
const getSquareDiv = document.getElementsByClassName('square-div');

const drawBg = color => {
  for (let i = 0; i < getSquareDiv.length; i++) {
    getSquareDiv[i].addEventListener(
      'mousedown',
      (setBackground = () => {
        getSquareDiv[i].style.backgroundColor = color;
      })
    );

    getSquareDiv[i].addEventListener(
      'mousemove',
      (setBackground = () => {
        if (colorTrigger === true) {
          getSquareDiv[i].style.backgroundColor = color;
        }
      })
    );
  }
};

const drawBgOnMobile = color => {
  getSquareDiv[i].addEventListener(
    'touchstart',
    (setBackground = () => {
      if (colorTrigger === true) {
        getSquareDiv[i].style.backgroundColor = color;
      }
    })
  );
  getSquareDiv[i].addEventListener(
    'touchmove',
    (setBackground = () => {
      if (colorTrigger === true) {
        getSquareDiv[i].style.backgroundColor = color;
      }
    })
  );
};

const selectDrawBtn = document.getElementById('draw-btn');

selectDrawBtn.addEventListener('click', () => {
  drawBg('black');
});
selectDrawBtn.addEventListener('click', () => {
  drawBgOnMobile('black');
});

const eraseBtn = document.getElementById('eraser-btn');

eraseBtn.addEventListener('click', () => {
  drawBg('');
});

// function random color
const selectRaindowBtn = document.getElementById('rainbow-btn');

selectRaindowBtn.addEventListener(
  'click',
  (rainbowBg = () => {
    for (let i = 0; i < getSquareDiv.length; i++) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      getSquareDiv[i].addEventListener(
        'mousedown',
        (setBackground = () => {
          getSquareDiv[i].style.backgroundColor = randomColor;
        })
      );

      getSquareDiv[i].addEventListener(
        'mousemove',
        (setBackground = () => {
          if (colorTrigger === true) {
            getSquareDiv[i].style.backgroundColor = randomColor;
          }
        })
      );
    }
  })
);
