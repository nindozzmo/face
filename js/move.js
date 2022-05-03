window.onload = function(){

  let wrapper = document.querySelector('.wrapper');
  let left = document.querySelector('.left-eye');
  let right = document.querySelector('.right-eye');
  let mouth = document.querySelector('.mouth');

    wrapper.addEventListener('mousemove', (event) => {
      //eyes movement
      let move = (event.clientY * 0.07);
        
      left.style.transform = `translateX(-${move}rem)`;
      right.style.transform = `translateX(${move}rem)`;
        
      //mouth animation
      mouth.innerHTML = ')';
      mouth.style.marginTop = 0;
        
      if (move > 10 && move < 20) {
        mouth.innerHTML = 'D';
        mouth.style.marginTop = '2rem';
      }
      else if (move > 20) {
        mouth.innerHTML = 'O';
        mouth.style.marginTop = '3rem';
      }
    })
  }