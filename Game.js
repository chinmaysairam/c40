class Game{
constructer(){
    
}
getState(){
var gameStateref=database.ref('gameState')
gameStateref.on("value",function(data){
    gameState=data.val()
})
}

update(state){
  database.ref('/').update({
gameState:state

  })
}
async start(){
if (gameState===0){

player=new Player()
var playerCountref=await database.ref("playerCount").once("value")
if(playerCountref.exists()){
  playerCount=playerCountref.val()
  player.getCount()
}

form=new Form()
form.display();

}
car1=createSprite(100,200);
car1.addImage(car1image);
car2=createSprite(300,200);
car2.addImage(car2image);
car3=createSprite(500,200);
car3.addImage(car3image);
car4=createSprite(700,200);
car4.addImage(car4image);
cars=[car1,car2,car3,car4]
}
play(){
form.hide()
text("game Start",120,100)
Player.getPlayerInfo()
player.getCarsAtEnd()
if(allPlayers!==undefined){
  image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
  var index=0
  var x=175
  var y=0
//var displayPosition=130,index for array
for(var plr in allPlayers){
 // displayPosition+=30
  //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
  index=index+1
  x=x+200
  y=displayHeight-allPlayers[plr].distance
  cars[index-1].x=x
  cars[index-1].y=y
  if(index===player.index){
    strokeWeight(10)
    fill("red")
    ellipse(x,y,60,60)
    cars[index-1].shapeColor="red"
camera.position.x=displayWidth/2
camera.position.y=cars[index-1].y

  }
}

}
if(keyIsDown(UP_ARROW)&&player.index!==null){
  player.distance+=50
  player.update()
}
if(player.distance>3860){
  gameState=2
  player.rank+=1
  Player.updateCarsAtEnd(player.rank)


}
drawSprites()
}
end(){
console.log("game ended");
//game.update(2)
console.log(player.rank)
}

}