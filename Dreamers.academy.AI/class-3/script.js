let recognition = new window.webkitSpeechRecognition();
let textbox = document.getElementById("textbox");
let synth = window.speechSynthesis;
let msg1 = new SpeechSynthesisUtterance("Taking photo in 5 seconds.");
let msg2 = new SpeechSynthesisUtterance("Your command does not match.");
function start(){
    textbox.innerHTML = "";
    recognition.start();
}



recognition.onresult = function(e){
    let command = e.results[0][0].transcript;
    textbox.innerHTML = command;

    if (command == "take a photo"){
        speak()
    }
    else{
        synth.speak(msg2)
    }
}


function speak(){
    synth.speak(msg1);
    Webcam.attach("#webcam")
   setTimeout(function(){
    takeSelfie();
    
   },5000)
    
}

function takeSelfie(){
    Webcam.snap(function(image){
    document.getElementById("webcampic").innerHTML = `<img src="${image}">`
    })
}