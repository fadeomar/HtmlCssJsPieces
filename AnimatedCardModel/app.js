const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient')
let prevColor = "blue";
let animationEnd = true;

const changeColor = (elm) => {

   if(!animationEnd) {
    console.log("animation running now")
    return; 
   }
  const primary = elm.getAttribute('primary'); 
  const color = elm.getAttribute('color');
  const shoe = document.querySelector(`.shoe[color=${color}]`);
  const gradient = document.querySelector(`.gradient[color=${color}]`)
  const prevGradient = document.querySelector(`.gradient[color=${prevColor}]`)
  

  colors.forEach(color => color.classList.remove('active'))
  elm.classList.add('active');

  // to change the style color according selecting color 
  document.documentElement.style.setProperty('--primary', primary);

  shoes.forEach(shoe => shoe.classList.remove('show'));
  shoe.classList.add('show');

  gradients.forEach(g => g.classList.remove('background-animation', 'prev-gradient'));
  gradient.classList.add('background-animation');
  prevGradient.classList.add('prev-gradient');

  prevColor = color;
  animationEnd = false;

  gradient.addEventListener('animationend', () => {
    animationEnd = true;
  })
}

const changeSize = (elm) => {
  sizes.forEach(size => size.classList.remove('active'))
  elm.classList.add('active');
}

sizes.forEach(size => {
  size.addEventListener('click', () => changeSize(size))
})

colors.forEach(color => {
  color.addEventListener('click', () => changeColor(color))
});
