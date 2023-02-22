const playBtn = document.querySelector('.play-btn')
const timer = document.querySelector('.timer')
const pausebtn = document.querySelector('.pause-btn')
const resumebtn = document.querySelector('.resume-btn')




let timerId

function startTimer(){
    if (!timerId){
        timerId = setInterval(updateTime,1000)}

}

function pauseTimer(){
    clearInterval(timerId)
    timerId = null
}

function resumeTimer(){
   updateTime()
   startTimer()
    
}


let seconds = 20
function updateTime (){
    
    timer.textContent = seconds 
    seconds --
    
}




playBtn.addEventListener('click', startTimer)
pausebtn.addEventListener('click',pauseTimer)
resumebtn.addEventListener('click',resumeTimer)