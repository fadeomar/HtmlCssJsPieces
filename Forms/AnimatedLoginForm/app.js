const inputs = document.querySelectorAll('.input');


function onFoucus(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function onBlur(){
  let parent = this.parentNode.parentNode;
  if(this.value === "") {
    parent.classList.remove('focus')
  }

}
// the arrow function dosen't work this not defind

inputs.forEach(input => {
  input.addEventListener('focus', onFoucus);
  input.addEventListener('blur', onBlur);
})