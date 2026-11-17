// https://teachablemachine.withgoogle.com/models/Z7DypoHwm/

function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    model = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z7DypoHwm/model.json', modelReady);
}

function modelReady(){
    model.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        alert("something went wrong");
    }
    else if(results){
        console.log(results);
        document.getElementById("name").innerHTML = "Name:" + results[0].label;
        document.getElementById('acc').innerHTML = "Accuray:" + (results[0].confidence*100).toFixed(2) + '%';

        if(results[0].label == "page"){
            
            document.getElementById("divt").src = "paper.webp";
            
            
        }
        else if(results[0].label === "Clapping"){
            document.getElementById("divt").src = "https://t3.ftcdn.net/jpg/15/44/96/42/360_F_1544964219_R7QL6JCzlBbbcNG9QGtgwRp1AgvsI47i.jpg";
        }
        else if(results[0].label === "voice"){
            document.getElementById("divt").src = "https://static.vecteezy.com/system/resources/previews/005/559/293/non_2x/person-speak-icon-man-voice-voice-control-and-recognition-audio-assistant-for-web-mobile-app-sign-vector.jpg";
        }
    }
    
}


