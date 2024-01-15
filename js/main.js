

const container = document.querySelector('.container');
const text = document.getElementById('text');
const btnAction = document.getElementById('btnAction');
const btnReset = document.getElementById('btnReset');
const innerBar=document.getElementById('innerBar')
innerBar.style.width= 0;



btnAction.addEventListener("click", function() {
  let t = 5; 
  container.classList.add('action');
  innerBar.style.animationDuration = t + 's';
  setTimeout(function (){

    container.classList.remove('action');
    text.classList.add('action');

  },t * 1000);

})
btnReset.addEventListener("click", function() {
  text.classList.remove('action');
})
