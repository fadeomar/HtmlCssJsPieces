const profileImage = document.querySelector('.image');
const closeBtn = document.querySelector('.close');
const model = document.querySelector('.model')

profileImage.addEventListener('click', () => {
  model.classList.add('show')
})

closeBtn.addEventListener('click', () => {
  model.classList.remove('show')
})
