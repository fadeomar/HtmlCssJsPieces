const inputs = document.querySelectorAll('.input');


function asd(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

// the arrow function dosen't work this not defind

inputs.forEach(input => {
  input.addEventListener('focus', asd)
})