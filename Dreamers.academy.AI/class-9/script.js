
let canvas = document.getElementById("canvas");
let video = document.getElementById("video");
let context = canvas.getContext('2d');

cocoSsd.load().then(function(model){
    console.log("Model ready.");
    navigator.mediaDevices.getUserMedia({video:true})
    .then(function (stream){
        video.srcObject = stream;
        video.addEventListener('loadeddata', function(){
            detectObjects(model);
        })
    }).catch(function(error){
        alert("Error: " + error);
    })
})

function detectObjects(model){
    model.detect(video).then(function(predictions){
        context.clearRect(0,0,canvas.width,canvas.height);
        context.drawImage(video,0,0,canvas.width,canvas.heigth);
        for(i=0; i < predictions.length; i++){
            let prediction = predictions[i];
            let x = prediction.bbox[0];
            let y = prediction.bbox[1];
            let width = prediction.bbox[2];
            let heigth = prediction.bbox[3];
            let text = prediction.class+"-" + (prediction.score*100).toFixed(2)+"%";

            context.strokeStyle = "red";
            context.lineWidth = '3';
            context.strokeRect(0,0,width,heigth);
            context.font = "20px";
            context.fillStyle = "red";
            context.fillText(text,x,y-10);

        }
        requestAnimationFrame(function(){
            detectObjects(model)
        })

    })
}