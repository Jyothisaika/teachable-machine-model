 Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
 });

 my_cam = document.getElementById("camera");
 Webcam.attach(my_cam);

 function take_snapshot(){
    Webcam.snap(function(clicked_snap){
       document.getElementById("result").innerHTML = "<img src = '" + clicked_snap + "' id = 'snapshot' >";

    });
    
 }
 console.log("ML5 version", ml5.version);

 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HuxXH6DYy/model.json", model_loaded);


 function model_loaded(){

   console.log("My Teachable Model has been loaded");

 }


 function check(){

   my_img = document.getElementById("snapshot");

   classifier.classify(my_img, gotResults);
 }

 function gotResults(error, results){

   if(error){
      console.error(error);
   }
   else {
      console.log(results);
   }
   
 }
