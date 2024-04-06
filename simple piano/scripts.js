"use strict mode";
let key = document.querySelectorAll(".item")
key.forEach(note => {
  note.addEventListener('click',()=>{
    let url = `sound/${note.textContent}.wav`
    new Audio(url).play();
  })
  
})
document.addEventListener('keydown',(e)=>{
  if("qzsedrfgyhujiklpm".includes(e.key)){
    let url = `sound/${e.key}.wav`
    new Audio(url).play();
  }
})

