noseX=0;
noseY=0;

function preload(){
   clown_nose=loadImage('https://i.postimg.cc/SNGwpvK8/l1.png'); 
   clown_hat=loadImage('https://i.postimg.cc/bYSyppXn/output-onlinepngtools-2.png'); 
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is working');
}

function draw(){
image(video,0,0,300,300);

image(clown_hat,noseX+8,noseY-5,80,80);

}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results){
    if(results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x-50;
            noseY=results[0].pose.nose.y-50;
            console.log("nose x="+noseX);
            console.log("nose x="+noseX);             
    }
}