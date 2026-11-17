function start(){
    // document.getElementById("label-name").innerHTML = "Listening.....";
    let canvas  = document.getElementById("drawingCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onstart = function(){
        document.getElementById("label-name").innerHTML = "Listening...."
    }

    recognition.onerror  = function(e){
        console.log("Error:"+ e);
    }

    recognition.onresult = function(event){
        let text = event.results[0][0].transcript;
        
        document.getElementById("label-name").innerHTML = text;
        if(text.includes("rectangle") || text.includes("Rectangle")){
            drawRectangle(ctx);
        }

        else if(text.includes("triangle")|| text.includes("Triangle")){
            drawTriangle(ctx);
        }

        else if (text.includes("Trapezium") || text.includes("trapezium")){
            drawTrapezium(ctx);
        }
        else{
            document.getElementById("label-name").innerHTML = "Choose a shape."
        }
    }


    recognition.start();
    
    



}


function drawRectangle(ctx){
    let canvasCenterX = 160;
    let canvasCenterY = 70;
    let length = 80;
    let startX = canvasCenterX - length / 2;
    let startY = canvasCenterY - length / 2;

    ctx.beginath;
    ctx.rect(startX,startY,length,length);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.closePath();
};


function drawTriangle(ctx){
    
  ctx.beginPath();
  ctx.moveTo(160, 30);    
  ctx.lineTo(110, 130);   
  ctx.lineTo(210, 130);   
  ctx.closePath();
  ctx.stroke();
};


function drawTrapezium(ctx){
   ctx.beginPath();
ctx.moveTo(110, 100);
ctx.lineTo(210, 100);
ctx.lineTo(190, 30);
ctx.lineTo(130, 30);
ctx.closePath();
ctx.fillStyle = 'lightgreen';
ctx.fill();
ctx.stroke();

}

