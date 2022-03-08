//Coloquei um bot pra jogar, mas só alterar alguns comandos que você com o mouse pode jogar também :)

var path,boy, leftBoundary,rightBoundary;
var pathImg,menino;
var i;
var garoto;
var fundo;
var parede1, parede2;
var parede;
var power;
var poder;
var bomb;
var bomba;
var sprite_invisivel;

function preload(){
    pathImg = loadImage("path.png");
    menino = loadAnimation("Runner-1.png","Runner-2.png");
    power = loadImage("energyDrink.png");
    bomb = loadImage("bomb.png")
}

function setup(){
    createCanvas(400,420)
    edges = createEdgeSprites();

    fundo = createSprite(200,200, 10, 10);
    fundo.addImage(pathImg);
    fundo.scale = "1.33";
    fundo.velocityY = -4;


    garoto = createSprite(200,200);
    garoto.addAnimation("running",menino);
    garoto.scale = 0.09;

    sprite_invisivel = createSprite(200, -200, 20, 20);
    sprite_invisivel.velocityX = 3.4;
    sprite_invisivel.visisble = false;

    parede1 = createSprite(59, 200, 22, 450);
    parede2 = createSprite(340, 200, 22, 450);
    parede1.visible = false;
    parede2.visible = false;

    poder = createSprite(random(40, 300), 0);
    poder.addImage(power);
    poder.scale = 0.15; 
    poder.velocityY = random(2, 5);

    bomba = createSprite(random(200, 350), 0);
    bomba.addImage(bomb);
    bomba.scale = 0.14;
    bomba.velocityY = random(2, 4);

}

function draw(){
    background(0);
    drawSprites();


    if(fundo.y < 0 ){
        fundo.y = fundo.height/2;
    }

    if(garoto.collide(poder)){
        poder.visible = false;
        sprite_invisivel.velocityX = sprite_invisivel.velocityX + 0.2;
    }
    if(garoto.collide(bomba)){
        bomba.visible = false;
        sprite_invisivel.velocityX = sprite_invisivel.velocityX - 0.15;
    }

    if(poder.y > 500){
        poder.x = random(20,350);
        poder.y = 0;
        poder.visible = true;
        poder.velocityY = random(2, 5);
    }

    if(bomba.y > 700){
        bomba.x = random(200,350);
        bomba.y = 0;
        bomba.visible = true;
        bomba.velocityY = random(2,4);
    }


    if(sprite_invisivel.x > 340){
        sprite_invisivel.velocityX = -3.5;
    }
    if(sprite_invisivel.x < 40){
        sprite_invisivel.velocityX = 3.5;
    }

    garoto.x = sprite_invisivel.x;

    garoto.collide(edges[3]);
    console.log(fundo.y);
}