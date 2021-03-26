var zombie1
var zombie1pre
var zombie2
var zombie2pre
var zombie3
var zombie3pre
var mappre
var map1
var player
var playerpre
var pow
var powpre
var gun
var gunSound
var score = 0
var level = 0
var gameState = "play"
function preload() {
  zombie1pre = loadImage("images/zombie1.png")
  zombie2pre = loadImage("images/zombie2.png")
  zombie3pre = loadImage("images/zombie3.png")
  mappre = loadImage("images/Black-Ops-4-Zombies.mp4_000082516-720x405.jpg")
  playerpre = loadImage("images/Capt Price.png")
  powpre = loadImage("images/pow.png")
  gunSound = loadSound("images/gun.mp3");

}
function setup() {

  createCanvas(displayWidth - 20, displayHeight - 20);
  console.log(height)
  map1 = createSprite(width / 2, height / 2, width, height)
  map1.addImage(mappre)
  map1.scale = 2.7
  player = createSprite(1700, 500)
  player.addImage(playerpre)
  player.scale = 2
  zombieGroup = new Group()


}

function draw() {
  if (gameState === "play") {
    if (score >= 0 && score <= 40) {
      spawnZombie(200)
    }
    if(score>=41&&score<=90){
    spawnZombie(100)
    }
    if(score>=91&&score<=150){
      spawnZombie(50)
    }
    if(score>=151&&score<=200){
      spawnZombie(40)
    }
    if(score>=201&&score<=300){
      spawnZombie(35)
    }
    if(score>=301&&score<=450){
      spawnZombie(30)
    }
    if(score>=451&&score<=550){
      spawnZombie(25)
    }
    if(score>=551&&score<=700){
      spawnZombie(15)
    
    }
    if(score>=701&&score<=900){
      spawnZombie(9)
    }

    if (score >= 950) {
      spawnZombie(3)
    }

    for (var i = 0; i < zombieGroup.length; i++) {
      if (mousePressedOver(zombieGroup.get(i))) {
        pow = createSprite(1500, 350)
        pow.addImage(powpre)
        pow.lifetime = 3
        pow.scale = 0.3
        gunSound.play()
        zombieGroup.get(i).destroy();
        score = score + Math.round(random(1, 5))

      }

    }
    if (score >= 1000) {
      gameState = "end"
    }
  }

  drawSprites();

  fill("blue")
  textSize(40)
  text("Score:" + score, 1500, 150)
  if (gameState === "end") {
    zombieGroup.destroyEach()
    fill("red")
    textSize(80)
    text("Game Has Ended Reload Page To Start Again", 100, height / 2)

  }

}
function spawnZombie(x) {
  if (frameCount % x == 0) {
    zombie1 = createSprite(random(10, width - 50), random(10, height - 50), 50, 50)
    var r = Math.round(random(1, 3))
    if (r == 1) {
      zombie1.addImage(zombie1pre)
      zombie1.velocityX = 0.8 + score / 20
    }
    if (r == 2) {
      zombie1.addImage(zombie2pre)
      zombie1.velocityX = 1 + score / 30
    }
    if (r == 3) {
      zombie1.addImage(zombie3pre)
      zombie1.velocityX = 2.5 + score / 40
    }
    zombieGroup.add(zombie1)
  }
}