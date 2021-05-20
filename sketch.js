var bgImg;
var cat;

function preload() {
    //load the images here
 bgImg = loadImage("garden.png")
catimg1= loadImage("cat1.png")
mouseimg1=loadImage("mouse1.png")
catimg2 =loadImage("cat2.png,cat3.png")
mouseimg2 =loadImage("mouse2.png,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    
}

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCoad === RIGHT_ARROW){
    mouse.addAnimtion("mouseteasing" , mouseimg2);
    mouse.changeAnimtion("mouseteasing")
    mouse.frameDelay = 25;





  if(keyCoad === LEFT_ARROW){
mouse.addAnimtion("mouseteasing" , mouseimg2);
mouse.addAnimtion("mouseteasing")
mouse.frameDelay = 25;




}

}
