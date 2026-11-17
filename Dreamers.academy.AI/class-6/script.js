let canvas;
let model;
let synth;

function setup(){
    canvas = createCanvas(830,378);
    canvas.parent('canvas-container');
    model = ml5.imageClassifier('DoodleNet', modelReady);
    synth = window.speechSynthesis;
    canvas.mouseReleased(classifyCanvas);
}

function modelReady(){
    console.log("Model Ready!")
}


function draw(){
    strokeWeight(7);
    stroke("black");

    if(mouseIsPressed){
        line(mouseX,mouseY,pmouseX,pmouseY);
    }
}

function clearCanvas(){
    background('white');
}

function classifyCanvas(){
    model.classify(canvas,gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
        return;
    }
    else{
        document.getElementById('obj').innerHTML = results[0].label;
        document.getElementById("acc").innerHTML = (results[0].confidence*100).toFixed(2) + '%';
    }

    let object_name = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(object_name);
    

}
