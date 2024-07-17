let text = document.querySelector("#text")
let Listen = document.querySelector("#Listen")

Listen.addEventListener("click",function(){
    speakText(text.value); 
})


function speakText(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Text-to-speech is not supported in this browser.');
    }
  }
  
  

 