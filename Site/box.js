const boxes = document.querySelectorAll('.box');
let remainingBoxes = [...boxes];
let isRunning = false;
let timeoutId;

const buttonaleatoire = document.querySelector('.Aleatoire');
const buttonsimple = document.querySelector('.simple');


buttonaleatoire.addEventListener('click', function() {
  if (isRunning) {
    clearTimeout(timeoutId);
    boxes.forEach(box => {
      box.style.borderColor = '';
    });
    remainingBoxes = [...boxes];
    isRunning = false;
    return;
  }

  isRunning = true;
  function selectNextBox() {
    if (remainingBoxes.length === 0) {
      remainingBoxes = [...boxes];
    }
    const randomIndex = Math.floor(Math.random() * remainingBoxes.length);
    const selectedBox = remainingBoxes[randomIndex];
    selectedBox.style.borderColor = '#00ff00';
    remainingBoxes.splice(randomIndex, 1);

    timeoutId = setTimeout(function() {
      selectedBox.style.borderColor = '';
      selectNextBox();
    }, 500);
  }
  selectNextBox();
});


buttonsimple.addEventListener('click', function() {
  if (isRunning) {
    clearTimeout(timeoutId);
    boxes.forEach(box => {
      box.style.borderColor = '';
    });
    isRunning = false;
    return;
  }

  isRunning = true;
  let currentIndex = 0;
  function selectNextBox() {
    if (currentIndex === boxes.length) {
      boxes.forEach(box => {
        box.style.borderColor = '';
      });
      currentIndex = 0;
      isRunning = false;
      return;
    }
    boxes[currentIndex].style.borderColor = '#00ff00';

    timeoutId = setTimeout(function() {
      boxes[currentIndex].style.borderColor = '';
      currentIndex += 1;
      selectNextBox();
    }, 500);
  }
  selectNextBox();
});



// Array of all boxes
const boxesselcte = document.querySelectorAll('.box');

// Selecting a box
boxesselcte.forEach(box => {
  box.addEventListener('click', () => {
    boxesselcte.forEach(b => {
      b.classList.remove('selected');
    });
    box.classList.add('selected');
  });
});

const selectBoxButton = document.querySelector('.select-box');
let isSelectionOn = false;

selectBoxButton.addEventListener('click', () => {
  if (!isSelectionOn) {
    boxesselcte.forEach(box => {
      box.style.pointerEvents = 'auto';
    });
    isSelectionOn = true;
  } else {
    boxesselcte.forEach(box => {
      box.style.pointerEvents = 'none';
    });
    isSelectionOn = false;
  }
  
});




