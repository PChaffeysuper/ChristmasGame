

var enemys = []

var clock;
var middle;
var enemy;
var player;

this.star = false; 

let gameState = 0;
let Points = 0;

function preload(){
  img = loadImage('assets/background.jpg');
}
function setup() {
  createCanvas(windowWidth/2, windowHeight*0.75 );
  background(120, 30, 40);
  image(img, 0, 0)

  player1Colour = new colour(255,0,0)

  clock = new Clock();
  middle = new Middle((width/2),(height/2));
  player = new Player(width - 25, 100,  player1Colour)
  enemy = new Enemy(600, 100);
  

  for(var i=0; i<=5; i++) {
    enemys.push(new Enemy);
    enemys[i].setup(iddle);
  }
  noStroke()
  clock.start();
}



function draw() {
    //background(120, 10, 0);
    image(img, 0, 0, width, height)
    

    for(e = 0; e<=enemys.length-1; e++) {
      enemys[e].isInMiddle(middle);
      enemys[e].draw(middle);
      enemys[e].move(player);
    }

    player.draw();
    player.move(enemys[e]);
    var d = dist(player.x, player.y, middle.x, middle.y)
    

    if (Points === enemys.length){
      clock.stop();
      console.log(timer.innerHTML)
      text('well done you got', timer.innerHTML, width/2, height/2);
      fill(0, 255, 0 );
      noLoop()
    }
    middle.show();
    
    if(gameState == 1){
      console.log("Game is over!");
    }

}
function update(){




}
