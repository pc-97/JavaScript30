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

const keys=Array.from(document.querySelectorAll('.key'));
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));  // for each key in keys, execute removeTransition() when transition ends.              

function removeTransition(e){
    if(e.propertyName!=='transform')  //out of the function if not a transform.
    return;
    this.classList.remove('playing');   //this - refers to key.
  }

