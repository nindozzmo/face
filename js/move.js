window.onload = function () {

  let wrapper = document.querySelector('.wrapper');
  let left = document.querySelector('.left-eye');
  let right = document.querySelector('.right-eye');
  let mouth = document.querySelector('.mouth');
  
  //for mouse devices
  wrapper.addEventListener('mousemove', event => {    
    let move = (event.clientY * 0.07);
    if (move < 0) {
      move = 0;
    }
    
    //eyes movement
    left.style.transform = `translateX(-${move}rem)`;
    right.style.transform = `translateX(${move}rem)`;    
    
    //mouth placeholder
    mouth.innerHTML = ')';
    mouth.style.marginTop = 0;
    
    //mouth animation  
    if (move > 10 && move < 20) {
      mouth.innerHTML = 'D';
      mouth.style.marginTop = '2rem';
    }
    else if (move > 20) {
      mouth.innerHTML = 'O';
      mouth.style.marginTop = '3rem';
    }
  })
  
  //for touch devices
  wrapper.addEventListener('touchmove', event => {    
    let move = (event.touches[0].pageY * 0.07);
    if (move < 0) {
      move = 0;
    }
    
    //eyes movement
    left.style.transform = `translateX(-${move}rem)`;
    right.style.transform = `translateX(${move}rem)`;    
    
    //mouth placeholder
    mouth.innerHTML = ')';
    mouth.style.marginTop = 0;
    
    //mouth animation  
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
