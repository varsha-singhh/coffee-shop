const icons = document.querySelectorAll('.section-1-icons i')
let i = 1
setInterval(() => {
    1++
    const icon = document.querySelector('.section-1-icons.change')
    icon.classList.remove('change')
    if (i>icons.length){
        icons[0].classList.add('change')
    }
    icon.nextElementSibling.classList.add('change')


},4000
  