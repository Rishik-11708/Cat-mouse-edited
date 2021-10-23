var bgImg;
var cat,caImg1,catImg2,catImg3;
var canvas,bg;
var together;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");  
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png") 

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(900,600);
    cat.addAnimation("cat1",catImg1);
    cat.scale = 0.25;

   mouse = createSprite(200,600);
   mouse.addAnimation("mouse1",mouseImg1);
   mouse.scale = 0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat4",catImg3);
        cat.changeAnimation("cat4");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("mouse4",mouseImg3);
        mouse.changeAnimation("mouse4");
        mouse.scale = 0.15;
    }
 
    makeCatWalk(); 
    drawSprites();
}


function makeCatWalk(){

  //For moving and changing animation write code here

mouse.addAnimation("mouse2",mouseImg2);
mouse.changeAnimation("mouse2");
mouse.frameDelay = 25;

cat.velocityX = -5;
cat.addAnimation("cat2",catImg2);
cat.changeAnimation("cat2");
cat.frameDelay = 25;


}
