const canvasSize = 512;
const square = document.querySelector('#square');

const createElementDiv = (sizeValue) => {
  for (let i = 0; i < (sizeValue * sizeValue); i++) {
    const createDiv = document.createElement('div');
    createDiv.style.width = canvasSize / sizeValue + 'px';
    createDiv.style.height = canvasSize / sizeValue + 'px';
    createDiv.classList.add('square-div');
    square.appendChild(createDiv)[i];
  }

  changeBackgroundOnClick();
}

// default size

createElementDiv(4)

// Active btn reset canvas // 

const selectClearBtn = document.getElementById('reset-btn');

selectClearBtn.addEventListener('click', function() {
  document.getElementById('square').textContent = '';

  createElementDiv(8);
})

// Select size btn and clear canvas and create div //

const selectSizeBtn = document.getElementsByClassName('size-btn');

for (let i = 0; i < selectSizeBtn.length; i++) {
    selectSizeBtn[i].addEventListener('click', setSizeDiv = () => {
    const selectSizeValue = document.getElementsByClassName('size-span')[i].innerHTML;
    
    document.getElementById('square').textContent = '';
    
    createElementDiv(selectSizeValue);
  })
};

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

rangePixelSize.oninput = function(e){
  output.textContent = customRangeValues[this.value]+ ' x ' + customRangeValues[this.value];
  rangePixelSize.max = customRangeValues.length - 1;
};

rangePixelSize.oninput()

rangePixelSize.addEventListener('input', function() {
  const getRangeValue = customRangeValues[this.value];

  document.getElementById('square').textContent = '';

  createElementDiv(getRangeValue);
});

// change background div when clicked // 
let colorTrigger = false 

square.addEventListener('mousedown', () => {      
    colorTrigger = true;  
});   

square.addEventListener('mouseup', () => {      
    colorTrigger = false;  
});

function changeBackgroundOnClick() {
  const getSquareDiv = document.getElementsByClassName('square-div');
  
  for (let i = 0; i < getSquareDiv.length; i++) {
    getSquareDiv[i].addEventListener('mousedown', setBackground = () => {
        getSquareDiv[i].style.backgroundColor = 'red';
    });

    getSquareDiv[i].addEventListener('mousemove', setBackground = () => {
      if (colorTrigger === true ) {
        getSquareDiv[i].style.backgroundColor = 'black';
      }
    });   
  }
}