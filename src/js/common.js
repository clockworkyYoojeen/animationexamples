// selecting elements
const startBtn = document.querySelector('#start_rolling')
const stopBtn = document.querySelector('#stop_rolling')
const rollingDiv = document.querySelector('.rolldiv')

const animatedDiv = document.querySelector('.second')

const firstHeader = document.querySelector('.clips h4')

// event listeners
startBtn.addEventListener('click', addRolling)
stopBtn.addEventListener('click', removeRolling)

animatedDiv.addEventListener('mouseenter', setBorders)
animatedDiv.addEventListener('mouseleave', removeBorders)

// rolling div
function addRolling(){
    rollingDiv.classList.remove('paused')
    rollingDiv.classList.add('running')
}
function removeRolling(){
    rollingDiv.classList.remove('running')
    rollingDiv.classList.add('paused')
}

// live borders
function setBorders(){
	animatedDiv.classList.add('live')
    setTimeout(() => {
        animatedDiv.classList.remove('livebackward')
    }, 1000)
}
function removeBorders(){
	animatedDiv.classList.add('livebackward')
    setTimeout(() => {
        animatedDiv.classList.remove('live')
        animatedDiv.classList.remove('livebackward')
    }, 1000)
}

// first header on the page appearing
// function showAnimated(){
//     firstHeader.classList.remove('animated')
//     firstHeader.classList.add('show')
// }

// setTimeout(showAnimated, 700)

// animated elements
const animItems = document.querySelectorAll('.animated')

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for(let i = 0; i < animItems.length; i++){
            let animItem = animItems[i]
            // elem height
            let animItemHeight = animItem.offsetHeight
            // distance from window top to elem top
            let animItemOffset = offset(animItem).top
            // coefficient
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animItemPoint 
            }

            if(pageYOffset > animItemOffset - 160){
                animItem.classList.add('show')
            } else{
                animItem.classList.remove('show')

            }
        }
    }
    function offset(elem){
        const rect = elem.getBoundingClientRect()
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}

setTimeout(animOnScroll, 700)

