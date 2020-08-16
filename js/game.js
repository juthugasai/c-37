class Game{

    constructor(){

    }


    getState(){
        var gsref=database.ref("gamestate");
        gsref.on("value",function(data){
            gamestate=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gamestate:state
        });

    }

    start(){
      if(gamestate===0){
          //Writing code using abstraction
        player = new Player();
        player.getCount();
        form= new Form();
        form.display();
      }  
    }

}
//getCount()
//display()

// "/" - refer to the main database inside which gamestate is created