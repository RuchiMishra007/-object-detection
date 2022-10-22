img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img = loadImage('plant.avif');
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
        for( i = 0; i < objects,length; i++)
        {
            document.getElementById("stauts").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    fill("#17202A");
    text("plant", 45, 75);
    noFill();
    stroke("#17202A");
    rect(30, 60, 450, 350);

    fill("#17202A");
    text("plant", 320, 120);
    noFill();
    stroke("#17202A");
    rect(300, 90, 270, 320);

    fill("#17202A");
    text("plant", 320, 120);
    noFill();
    stroke("#17202A");
    rect(300, 90, 270, 220);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}