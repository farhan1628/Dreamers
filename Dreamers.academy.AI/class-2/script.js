Webcam.set({
    width:330,
    height:260,
    image_format:"png",
    png_quality:90,

    
});

Webcam.attach("#image");
    


// https://teachablemachine.withgoogle.com/models/EBS9i84Cb/

 let model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EBS9i84Cb/model.json',() => console.log("loadedffff"));

function capture() {
    Webcam.snap(
        function (captured_image) {
            document.getElementById("image").innerHTML = `<img src="${captured_image}" id="captured_img" >`;
            
        }
    )
}



function identify(){
    let captured_img = document.getElementById("captured_img");
    if(captured_img){
        model.classify(captured_img, function(error, results){
            if(error){
                alert("Something whent wrong........", error)
            }
            else{
                let object = document.getElementById("object")
                let accuracy = document.getElementById("accuracy");
                object.innerHTML = results[0].label;
                accuracy.innerHTML = (results[0].confidence*100).toFixed(2)+ '%';
            }
        });
        
        
    }
    else{
        alert("Capture image first.")
    }
}