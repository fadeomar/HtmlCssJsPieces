const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');

const changeColor = (elm) => {
  let primary = elm.getAttribute('primary'); 
  console.log(elm)
  sizes.forEach(size => size.classList.remove('active'))
  elm.classList.add('active')
}

const changeSize = (elm) => {
  colors.forEach(color => color.classList.remove('active'))
  elm.classList.add('active')
}

sizes.forEach(size => {
  size.addEventListener('click', () => changeSize(size))
})

colors.forEach(color => {
  color.addEventListener('click', () => changeColor(color))
});
