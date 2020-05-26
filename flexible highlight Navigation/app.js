
const icons = document.querySelectorAll('[data-index]');

let previous = -1;

const movement = (elemet) => {
  elemet.classList.add("initialised");
  let index = elemet.getAttribute("data-index")
  let navtab = document.querySelector('nav');
  navtab.setAttribute("data-selected", index)
  if(previous == -1) {
    document.querySelector('[data-index="2"]').classList.add("initialised");
  }

  if(previous == 1 && index == 3 || previous == 3 && index == 1) { 
    //If going from one side to the other and middle needs to be hidden
    document.querySelector('[data-index="2"]').classList.remove("initialised");
  }

  setTimeout(function(){ 
    //Because apparently this is the only way it will work
    // navtab.find('.icon[data-index="2"]').addClass("initialised");
    document.querySelector('[data-index="2"]').classList.add("initialised");
    //Same animation as the other so they line up
  });

  previous = index;

  setTimeout(function(){
    navtab.classList.remove("hidemiddle")
}, 750);
}


icons.forEach((elm) => {
  elm.addEventListener('click', (e => movement(elm)))
})
