const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var world,engine;


var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10;
var boy, walk, kid;
var lightning1,lightning2,lightning3,lightning4;

var maxDrops = 100;
var drops = [];


function preload(){
    //walk=loadAnimation("images/Walking_Frame/walking_1.png","images/Walking_Frame/walking2.png","images/Walking_Frame/walking3.png","images/Walking_Frame/walking4.png","images/Walking_Frame/walking5.png","images/Walking_Frame/walking6.png","images/Walking_Frame/walking7.png","images/Walking_Frame/walking8.png");
    walk = loadImage("images/Walking_Frame/walking_1.png");
    lightning1=loadImage("images/thunderbolt/1.png");
    lightning2=loadImage("images/thunderbolt/2.png");
    lightning3=loadImage("images/thunderbolt/3.png");
    lightning4=loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(windowWidth,windowHeight);
    kid=createSprite(windowWidth/2,windowHeight*3.3/5,50,100);
    kid.addImage(walk);
    kid.scale=0.8;
   /* drop1=new Drop(random(0,windowWidth),0,1);
    drop2=new Drop(random(0,windowWidth),0,1);
    drop3=new Drop(random(0,windowWidth),0,1);
    drop4=new Drop(random(0,windowWidth),0,1);
    drop5=new Drop(random(0,windowWidth),0,1);
    drop6=new Drop(random(0,windowWidth),0,1);
    drop7=new Drop(random(0,windowWidth),0,1);
    drop8=new Drop(random(0,windowWidth),0,1);
    drop9=new Drop(random(0,windowWidth),0,1);
    drop10=new Drop(random(0,windowWidth),0,1);*/
    boy = new Umbrella(windowWidth/2,windowHeight*3/5);

    
    if(frameCount%100===0){
        for(var d=0;d<maxDrops;d++){
            drops.push(new Drop(random(0,windowWidth),random(-10,windowHeight)));
        }
    }
    
    
  

   Engine.run(engine);

}



function draw(){
    Engine.update(engine);
    background(0,0,0);
   boy.display();

    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].display();
    }
 
    var lightning = floor(random(1,4));
    if(frameCount%100===0){
        var thunder=createSprite(random(0,windowWidth,random(-10,0)));
        thunder.scale=random(0.5,1.5);
        switch(lightning){
            case 1: thunder.addImage(lightning1);
            break;
            case 2: thunder.addImage(lightning2);
            break;
            case 3: thunder.addImage(lightning3);
            break;
            case 4: thunder.addImage(lightning4);
            break;
            default:break;
        }
        thunder.lifetime=4;
    }

    

    drawSprites();
    
}   
