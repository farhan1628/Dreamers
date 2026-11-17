function record(){
    let recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onstart = function(){
        alert("Microphone Enabled");
        document.getElementById("button").innerHTML = "Listening...";
    }

    recognition.onerror = function() {
        document.getElementById("text").innerHTML = "Error.....";
    }

    recognition.onresult = function (event){
        let trans = event.results[0][0].transcript;
        document.getElementById("text").innerHTML = trans;

    }
    
    recognition.start();
}