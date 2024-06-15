let idleTimer;
let idleStatus = false
function resetIdleTimer() {
    idleStatus = true
}

setInterval(()=>{
    if (idleStatus) {
        console.log("Happy Continue Session!");
    }
    idleStatus = fa
}, 5000)

setInterval(()=>{
    console.log(idleStatus)
}, 1000)

document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('mousedown', resetIdleTimer); 
document.addEventListener('keypress', resetIdleTimer);
document.addEventListener('touchstart', resetIdleTimer);