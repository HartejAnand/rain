const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var world,engine;


var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10;


var maxDrops = 1000;
var drops = [];


function preload(){

}

function setup(){

    engine = Engine.create();
    world = engine.world;

    drop1=new Drop(random(0,windowWidth),0,1);
    drop2=new Drop(random(0,windowWidth),0,1);
    drop3=new Drop(random(0,windowWidth),0,1);
    drop4=new Drop(random(0,windowWidth),0,1);
    drop5=new Drop(random(0,windowWidth),0,1);
    drop6=new Drop(random(0,windowWidth),0,1);
    drop7=new Drop(random(0,windowWidth),0,1);
    drop8=new Drop(random(0,windowWidth),0,1);
    drop9=new Drop(random(0,windowWidth),0,1);
    drop10=new Drop(random(0,windowWidth),0,1);


    
    if(frameCount%100===0){
        for(var d=0;d<maxDrops;d++){
            drops.push(new Drop(random(0,windowWidth),0));
        }
    }

   createCanvas(windowWidth,windowHeight);

   Engine.run(engine);

}



function draw(){
    background(0,0,0);

    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].display();
    }
 
    drawSprites();
    
}   

