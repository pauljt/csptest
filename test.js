var testDiv;
window.addEventListener('load', function () {
  testDiv = document.querySelector('#test');
  for (var i = 1; i <= 9; i++) {
    document.querySelector('#test' + i).addEventListener('click', this['test' + i])
  }

  document.querySelector("#install").addEventListener('click',install);

});

function install(){
  var manifest=location.protocol+"//"+location.host+"/manifest.webapp";
  navigator.mozApps.install(manifest);
}

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

function test4(){
  testDiv.removeAttribute('style');
  testDiv.textContent="imported style makes this indianred"
  var style = document.createElement('style');
  style.appendChild(document.createTextNode('@import url(\'test.css\');'));
  document.head.appendChild(style);
}

function test5() {
  testDiv.style = "background:yellow";
  testDiv.textContent='yellow';
}
function test6() {
  testDiv.style.background = "purple";
  testDiv.textContent='purple';
}

function test7(){
  testDiv.removeAttribute('style');
  testDiv.textContent='No background';
}

function test8(){
  testDiv.style.setProperty('background','orange');
  testDiv.textContent='Orange';
}



function test9(){
  var stylesheet = 'icon.css';
  var template = document.createElement('div');

  var link=document.createElement('link');
  link.setAttribute('href',stylesheet);
  link.setAttribute('type','text/css');
  link.setAttribute('rel','StyleSheet');
  template.appendChild(link);

  var content=document.createElement('div');
  content.setAttribute('id','icon')

  content.textContent='testing dynamic style loading using link'
  template.appendChild(content);
  testDiv.appendChild(template);

}



