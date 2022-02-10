function setup() {
    canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    background("white");
    fill(255,0,0);
    stroke(255,0,0);
    circle(50, 30, 50);
    circle(450, 30, 50);
    circle(50,250, 50);
    circle(450,250, 50);
    fill(0,255,0);
    stroke(0,255,0);
    rect(72, 20, 355, 20);
    rect(72, 240, 355, 20);
    rect(40, 53, 20 , 175);
  rect(440, 53, 20 , 175);
}
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="take_snapshot" src="'+data_uri+'"/>';

    });
}
function draw() {
    image(video, 175, 100, 150,100);
}
