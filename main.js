Webcam.set({
    width : 350,
    height : 300 ,
    png_quality : 90,
    image_format : 'png'
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data_uri+'"/>'
    })
}
console.log('ml5 version:', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SwSTQa-_J/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded!")
}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}
function gotResult(error , results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if (prediction_1 == "victory" ){
       document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(prediction_1 == "nice"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(prediction_1 == "best"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (prediction_2 == "victory" ){
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
             }
             if(prediction_2 == "nice"){
                 document.getElementById("update_emoji2").innerHTML = "&#128076;";
             }
             if(prediction_2 == "best"){
                 document.getElementById("update_emoji2").innerHTML = "&#128077;";
             }
    }
}