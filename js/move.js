window.onload = function () {

  let wrapper = document.querySelector('.wrapper');
  let left = document.querySelector('.left-eye');
  let right = document.querySelector('.right-eye');
  let mouth = document.querySelector('.mouth');

  function eyesMove(x) {
    let y;
    x >= 0 ? y = x * 0.07 : y = 0;

    left.style.transform = `translateX(-${y}rem)`;
    right.style.transform = `translateX(${y}rem)`;
  }

  function mouthChange(x) {
    mouth.innerHTML = ')';
    mouth.style.marginTop = 0;

    let y = x * 0.07;

    if (y > 10 && y <= 20) {
      mouth.innerHTML = 'D';
      mouth.style.marginTop = '2rem';
    }
    else if (y > 20) {
      mouth.innerHTML = 'O';
      mouth.style.marginTop = '3rem';
    }
  }

  // for mouse devices
  wrapper.addEventListener('mousemove', event => {
    eyesMove(event.clientY);
    mouthChange(event.clientY);
  });

  //for touch devices
  wrapper.addEventListener('touchmove', event => {
    eyesMove(event.touches[0].pageY);
    mouthChange(event.touches[0].pageY);
  });

}