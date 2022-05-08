window.onload = function () {

  let wrapper = document.querySelector('.wrapper');
  let left = document.querySelector('.left-eye');
  let right = document.querySelector('.right-eye');
  let mouth = document.querySelector('.mouth');

  function preventCollision(x) {
    x >= 0 ? x *= 0.07 : x = 0;
    return x;
  }
  
  function eyesMove(x) {
    left.style.transform = `translateX(-${x}rem)`;
    right.style.transform = `translateX(${x}rem)`;
  }

  function mouthChange(x) {
    mouth.innerHTML = ')';
    mouth.style.marginTop = 0;

    if (x > 10 && x <= 20) {
      mouth.innerHTML = 'D';
      mouth.style.marginTop = '2rem';
    }
    else if (x > 20) {
      mouth.innerHTML = 'O';
      mouth.style.marginTop = '3rem';
    }
  }

  // for mouse devices
  wrapper.addEventListener('mousemove', event => {
    eyesMove(preventCollision(event.clientY));
    mouthChange(preventCollision(event.clientY));
  });

  //for touch devices
  wrapper.addEventListener('touchmove', event => {
    eyesMove(preventCollision(event.touches[0].pageY));
    mouthChange(preventCollision(event.touches[0].pageY));
  });

}