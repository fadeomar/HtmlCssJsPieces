const sizes = document.querySelectorAll('.size');

const changeSize = (elm) => {
  sizes.forEach(size => size.classList.remove('active'))
  elm.classList.add('active')
}

sizes.forEach(size => {
  size.addEventListener('click', () => changeSize(size))
})
