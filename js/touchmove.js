window.onload = function () {

  let wrapper = document.querySelector('.wrapper');
  let left = document.querySelector('.left-eye');
  let right = document.querySelector('.right-eye');
  let mouth = document.querySelector('.mouth');

  wrapper.addEventListener('touchmove', tevent => {
    //eyes movement
    let tmove = (tevent.touches[0].pageY * 0.07);

    left.style.transform = `translateX(-${tmove}rem)`;
    right.style.transform = `translateX(${tmove}rem)`;

    //mouth placeholder
    mouth.innerHTML = ')';
    mouth.style.marginTop = 0;
    //mouth animation  
    if (tmove > 10 && tmove < 20) {
      mouth.innerHTML = 'D';
      mouth.style.marginTop = '2rem';
    }
    else if (tmove > 20) {
      mouth.innerHTML = 'O';
      mouth.style.marginTop = '3rem';
    }
  })

}