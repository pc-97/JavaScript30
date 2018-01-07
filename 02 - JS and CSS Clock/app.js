const secondHand=document.querySelector('.second-hand');
  const minsHand=document.querySelector('.min-hand');
  const hourHand=document.querySelector('.hour-hand');
 
  function setMin(){
    minuteHand.style.transform='rotate(6deg)';
}
  function setDate(){
    const now= new Date();
    
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    
    const min=now.getMinutes();
    const minDegrees=((min/60)*360)+((seconds/60)*6)+90;
    minsHand.style.transform=`rotate(${minDegrees}deg)`;
    
    const hour=now.getHours();
    const hourDegrees=((hour/12)*360)+((min/60)*30)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}

  setInterval(setDate,1000);