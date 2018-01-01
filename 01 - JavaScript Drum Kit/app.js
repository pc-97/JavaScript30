window.addEventListener("keydown",playSound);


function playSound(e)
{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);   // e, the event object has the keyCode property.
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);                                                                          
    if(!audio)
    return;  //out of the function
    audio.currentTime=0;  //resets the audio
    audio.play();
    key.classList.add("playing");


}

const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));  // for each key in keys, attach this event - execute removeTransition()              

function removeTransition(e){
    if(e.propertyName!=='transform')  //out of the function if not a transform.
    return;
    console.log(e.propertyName);
    this.classList.remove('playing');   //this - refers to key.
  }

