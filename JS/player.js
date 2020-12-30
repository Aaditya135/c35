class Player{

    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getPlayerCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",(data) => {
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    static getPlayerInfo(){}

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            index: this.index,
            name: this.name,
            distance: this.distance
        })
    }

}