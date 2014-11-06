window.addEventListener('load',function(){

  if (typeof jQuery == 'undefined') {
    document.querySelector('#output').textContent='Jquery not loaded'

  }else{
    document.querySelector('#output').textContent='Jquery was loaded! '
  }
});


