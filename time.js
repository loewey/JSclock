
const secondHand = document.getElementById('secondHand')
const minuteHand = document.getElementById('minuteHand')
const hourHand = document.getElementById('hourHand')

function timeNow(){
    const now = new Date()
    const currentSeconds = now.getSeconds()
    const currentMinutes = now.getMinutes()
    const currentHour = now.getHours()
    // console.log(currentSeconds)
    const currentSecondsAngle = ((currentSeconds/60)*360) + 90
    const currentMinuteAngle = ((currentMinutes/60)*360) + 90 
    const currentHourAngle = ((currentHour/12)*360) + 90 
    // console.log(currentSecondsAngle)
    secondHand.style.transform=`rotate(${currentSecondsAngle}deg)`
    minuteHand.style.transform=`rotate(${currentMinuteAngle}deg)`
    hourHand.style.transform=`rotate(${currentHourAngle}deg)`
    
}



setInterval(timeNow,1000)