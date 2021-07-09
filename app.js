const minuteHand = document.querySelector('.minute_hand svg');
const hourHand = document.querySelector('.hour_hand svg');
const cogWheel = document.querySelector('.cog3 svg');




function getTime() {
  const now = new Date();
  const cogSec = now.getSeconds();
  const minutes = now.getMinutes();
  let hours = now.getHours();
  hours = (hours % 12) || 12;

  
  
  const secondDegrees = ((cogSec / 60) * 360);
  cogWheel.style.transform = `rotate(${secondDegrees}deg)`;


  const minuteDegress = ((minutes / 60) * 360);
  minuteHand.style.transform = `rotate(${minuteDegress}deg)`;


  const hourDegress = ((hours / 12) * 360);
  hourHand.style.transform = `rotate(${hourDegress}deg)`;

  console.log(cogSec)


}
setInterval(getTime,1000)

