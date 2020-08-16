class Player{
    constructor(){

    }

    getCount(){
        var pcref=database.ref("playercount");
        pcref.on("value",function(data){
            playercount=data.val();
        })
    }

    update(name){
    var playerindex="player"+playercount;
    database.ref(playerindex).set({
        Name:name
    })
    }

    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
}