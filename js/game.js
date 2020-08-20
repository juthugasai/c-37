class Game{

    constructor(){

    }


    getState(){
        var gsref=database.ref("gameState");
        gsref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });

    }

    async start(){
      if(gameState===0){
          //Writing code using abstraction
        player = new Player();
        var pcref = await database.ref("playerCount").once("value");
        if(pcref.exists()){
            playerCount = pcref.val();
            player.getCount();
        }
        form= new Form();
        form.display();
      }  
    }

    play(){
        form.hide();
        textSize(30);
        text("gameStart",120,100);
        Player.getPlayerInfo(); //static function being called by the name of the class
        if(allPlayers!==undefined){
            var display_position=130;
            
            for(var i in allPlayers){
                if(i === "player" + player.index){
                    fill("red");
                }
                else{
                    fill("black")
                }

                display_position = display_position + 20;
                textSize(15);
                text(allPlayers[i].name + ": "+ allPlayers[i].distance,120,display_position);
                
            }
        }

        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance = player.distance +50;
            player.update();
        }
        
        
    }

}
//getCount()
//display()

// "/" - refer to the main database inside which gamestate is created