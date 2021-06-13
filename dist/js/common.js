const startBtn = document.querySelector('#start_rolling')
const stopBtn = document.querySelector('#stop_rolling')
const rollingDiv = document.querySelector('.rolldiv')

const animatedDiv = document.querySelector('.second')


startBtn.addEventListener('click', addRolling)
stopBtn.addEventListener('click', removeRolling)

function addRolling(){
    rollingDiv.classList.remove('paused')
    rollingDiv.classList.add('running')
}
function removeRolling(){
    rollingDiv.classList.remove('running')
    rollingDiv.classList.add('paused')
}

animatedDiv.addEventListener('mouseenter', function(){
	animatedDiv.classList.add('live')
    setTimeout(() => {
        animatedDiv.classList.remove('livebackward')
    }, 1000)
})
animatedDiv.addEventListener('mouseleave', function(){
	animatedDiv.classList.add('livebackward')
    setTimeout(() => {
        animatedDiv.classList.remove('live')
        animatedDiv.classList.remove('livebackward')
    }, 1000)
})