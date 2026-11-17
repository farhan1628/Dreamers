// let inputImage = document.getElementById("inputIamge");
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let output = document.getElementById("output");

// let model;
// cocoSsd.load().then(function(loadedModel){
//     model = loadedModel;
//     output.innerHTML = "Model ready, upload image."
// });


// inputImage.addEventListener('change', function(event){
//     let file = event.target.files[0];

//     if(!file) return;
    

//     const image = new Image();
//     const reader = new FileReader();

//     reader.onload = function(){
//         image.src = reader.result;
//         image.onload = function(){
//             ctx.clearRect(0,0, canvas.width, canvas.height);
//             ctx.drawImage(0,0,canvas.width, canvas.height);
            
//             detectObjects(image);

//         };
        
//     };
//     reader.readAsDataURL(file);
// });

// function detectObjects(image){
//     output.innerHTML = "Detecting Objects.....";
//     model.detect(image).then(function(predictions){
//         output.innerHTML = "Objects Detected:"+ predictions.length;
//         predictions.forEach(function(prediction){
//             const scaleX = canvas.width/image.width;
//             const scaleY  = canvas.height/image.height;
//             const [x,y,width,height] = prediction.bbox;
//             const text = `${prediction.class} (${(prediction.score*100).toFixed(2)}%)`;
//             ctx.strokeStyle = "blue";
//             ctx.strokeRect(x*scaleX, y*scaleY,width*scaleX, height*scaleY);
//             ctx.fillStyle = "blue";
//             ctx.fillText(text, x*scaleX,y*scaleY > 20 ? y* scaleY-5:10)
//         })
//     })
// }



// ######################################################################################
// ######################################################################################




let inputImage = document.getElementById("inputImage");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let output = document.getElementById("output");

// Load the model.
let model;
cocoSsd.load().then(function (loadedModel) {
    model = loadedModel;
    output.innerHTML = "Model Loaded Successfully. Please upload an image.";
});

// Load the image.
inputImage.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;
    const image = new Image();
    const reader = new FileReader();

    reader.onload = function () {
        image.src = reader.result;

        image.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            detectObjects(image);
        };
    };

    reader.readAsDataURL(file);
});

// Detect objects in the image.
function detectObjects(image) {
    output.innerHTML = "Detecting objects...";
    model.detect(image).then(function (predictions) {
        output.innerHTML = "Objects Detected: " + predictions.length;
        predictions.forEach(function (prediction) {
            // Draw bounding box
            const scaleX = canvas.width / image.width;
            const scaleY = canvas.height / image.height;
            const [x, y, width, height] = prediction.bbox;
            const text = `${prediction.class} (${(prediction.score * 100).toFixed(2)}%)`;

            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 2;
            ctx.strokeRect(x * scaleX, y * scaleY, width * scaleX, height * scaleY);

            ctx.fillStyle = "yellow";
            ctx.font = "12px Arial";
            ctx.fillText(text, x * scaleX, y * scaleY > 20 ? y * scaleY - 5 : 10)
        })

    })
}





