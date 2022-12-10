const pictureAll = ['cake1.jpeg', 'cake2.jpeg', 'cake3.jpeg', 'cake4.jpeg', 'cake5.jpeg',]
const buttonBack = document.querySelector('.back')
const buttonNext = document.querySelector('.next')

let i = 0

buttonNext.addEventListener('click', () => {
    i++
    if (i > pictureAll.length-1) {
        i = 0
    }
    document.querySelector('.picture').src = pictureAll[i]
})

buttonBack.addEventListener('click', () => {
    i--
    if (i < 0) {
        i = pictureAll.length-1
    }
    document.querySelector('.picture').src = pictureAll[i]
})