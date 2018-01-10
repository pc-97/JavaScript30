  const panels=document.querySelectorAll('.panel');  //use querySelectorAll and not querySelector to get a Nodelist of all the panels.
  function toggleOpen(){
    this.classList.toggle('open');
}
function toggleActive(e){
    if(e.propertyName.includes("flex"))  // for Safari + Chrome & FF
    this.classList.toggle('open-active'); 
}
  panels.forEach(panel=> panel.addEventListener("click",toggleOpen));
  panels.forEach(panel=> panel.addEventListener("transitionend",toggleActive));
