var testDiv;
window.addEventListener('load', function () {
  testDiv = document.querySelector('#test');
  for (var i = 1; i <= 7; i++) {
    document.querySelector('#test' + i).addEventListener('click', this['test' + i])
  }

});

function test1() {
  testDiv.innerHTML = "<style>div#test {background:blue}</style>Blue"
}
function test2() {
  testDiv.innerHTML = "<div style='background:green'>green</div>";
}
function test3() {
  testDiv.setAttribute('style', 'background:red');
  testDiv.textContent='red';
}
function test4() {
  testDiv.style = "background:yellow";
  testDiv.textContent='yellow';
}
function test5() {
  testDiv.style.background = "purple";
  testDiv.textContent='purple';
}

function test6(){
  testDiv.removeAttribute('style');
  testDiv.textContent='No background';
}

function test7(){
  testDiv.style.setProperty('background','orange');
  testDiv.textContent='Orange';
}



