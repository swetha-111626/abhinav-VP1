var dog, happyDog, database, foodS, foodStock;

function preload()
{
  happyDog = loadImage ("happydog.png");
  dogImg=loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
}


function draw() { 
  background(46, 139, 87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  
  drawSprites();
  fill("yellow")
  text("Food remaining : "+foodS,120,220)

}
function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0
    }else{
      x=x-1
    }
    database.ref('/').update({
      Food:x
    })
  }



