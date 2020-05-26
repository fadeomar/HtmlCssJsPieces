const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');

const changeColor = (elm) => {
  const primary = elm.getAttribute('primary'); 
  const color = elm.getAttribute('color');
  const shoe = document.querySelector(`.shoe[color=${color}]`)
  sizes.forEach(size => size.classList.remove('active'))
  elm.classList.add('active');

  // to change the style color according selecting color 
  document.documentElement.style.setProperty('--primary', primary);
  
  shoes.forEach(shoe => shoe.classList.remove('show'));
  shoe.classList.add('show');
}

const changeSize = (elm) => {
  colors.forEach(color => color.classList.remove('active'))
  elm.classList.add('active');
}

sizes.forEach(size => {
  size.addEventListener('click', () => changeSize(size))
})

colors.forEach(color => {
  color.addEventListener('click', () => changeColor(color))
});
