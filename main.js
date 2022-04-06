const minutesSpan = document.querySelector('.minutes')
const secondsSpan = document.querySelector('.seconds')
const hoursSpan = document.querySelector('.hours')
const daysSpan = document.querySelector('.days')
const debut = '01 jan 2023'
setInterval(dateCountdown, 1000)
function dateCountdown() {
  const debutDate = new Date(debut)
  const todayIs = new Date()
  const timeLeft = debutDate - todayIs
  const secondsTotal = timeLeft / 1000
  minutesSpan.textContent = Math.floor((secondsTotal / 60) % 60)
    .toString()
    .padStart(2, 0)
  secondsSpan.textContent = Math.floor(secondsTotal % 60)
    .toString()
    .padStart(2, 0)
  hoursSpan.textContent = Math.floor((secondsTotal / 3600) % 24)
    .toString()
    .padStart(2, 0)
  daysSpan.textContent = Math.floor(secondsTotal / (3600 * 24))
    .toString()
    .padStart(2, 0)
}
dateCountdown()
