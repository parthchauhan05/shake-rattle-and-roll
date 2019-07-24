const shakeBox = document.getElementById('shake')
shakeBox.classList.add('shake', 'animated', 'infinite')
shakeBox.textContent = 'Shake'

const rattleBox = document.querySelector('.rattle')
rattleBox.classList.add('wobble')
rattleBox.classList.remove('rattle')
rattleBox.textContent = 'Wobble'

const mystryBox = document.querySelector('.container div:nth-child(3)')
mystryBox.classList.add('rollIn')
mystryBox.textContent = 'Roll'

const animationBox = document.querySelector('[data-animation]')
animationBox.classList.add(animationBox.dataset.animation)

const myBox = document.getElementById('choose')
myBox.classList.add('zoomIn', 'animated', 'infinite')
