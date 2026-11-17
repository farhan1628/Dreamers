let canvas = document.getElementById("camera");
let ctx = canvas.getContext('2d');
let span = document.getElementById("span");

let filters = [
    {name: "none", style:"none"},
    {name:"blur",style:"blur(5px)"},
    {name:"Invert",style:"invert(100%)"},
    {name:"sepia",style:"sepia(100%)"},
    {name:"grayscale",style:"grayscale(100%)"},
    
    {name:"Hue rotate",style:"hue-rotate(180deg)"},
    
]

let currentFilter = 0;

function startWebcam(){
    navigator.mediaDevices.getUserMedia({ video:true})
        .then(function(source){
            let video = document.createElement('video');
            video.srcObject = source;
            video.play();
            video.addEventListener('loadeddata', function(){
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                drawToCanvas(video);
                
            });
            canvas.addEventListener("click", changeFilter)
        }).catch((error)=> {
            alert("error "+error.message);
        });
}

function changeFilter(){
    currentFilter = (currentFilter+1)% filters.length;
    
    span.textContent = filters[currentFilter].name;
    
}

function drawToCanvas(video){
    ctx.filter = filters[currentFilter].style;
    ctx.drawImage(video,0,0, canvas.width, canvas.height);
    requestAnimationFrame(()=> drawToCanvas(video));
}




startWebcam();