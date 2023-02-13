const boxes = document.querySelectorAll('.box');
let isRunning = false;
let timeoutId;

const button = document.querySelector('.simple');
button.addEventListener('click', function() {
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
    boxes[currentIndex].style.borderColor = '#ff9b3d';

    timeoutId = setTimeout(function() {
      boxes[currentIndex].style.borderColor = '';
      currentIndex += 1;
      selectNextBox();
    }, 2000);
  }
  selectNextBox();
});
