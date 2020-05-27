const profileImage = document.querySelector('.image');
const closeBtn = document.querySelector('.close');
const model = document.querySelector('.model');
const hover = document.querySelector('.hover');

profileImage.addEventListener('click', () => {
  model.classList.add('show')
  hover.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  model.classList.remove('show')
  hover.classList.remove('active')
})
