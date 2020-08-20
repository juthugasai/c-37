class Player{
    constructor(){

        this.distance=0;
        this.name=null;
        this.index=null;
        

    }

    getCount(){
        var pcref=database.ref("playerCount");
        pcref.on("value",function(data){
            playerCount=data.val();
        })
    }

    update(){
    var playerindex="players/player"+this.index;
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance


    })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    static getPlayerInfo(){
        var piref =database.ref("players");
        piref.on("value",(data)=>{
            allPlayers=data.val();

        } ); 

    }
}

//static - common functions which are called by the class themselves & not by the objects of the class
/*
Arrow function
()=>
-to create shorter functions
- to create when name of functions are not required
*/