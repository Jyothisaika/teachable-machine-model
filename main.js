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