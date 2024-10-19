var cascIndex = 0;

function testHighlights(){

    highlightFloor(0,0,"#ff0000");
    highlightFloor(10,0,"#ff8800");
    highlightFloor(20,0,"#ffaa00");

    highlightFloor(24,0,"#00bcff");
    highlightFloor(25,0,"#0000ff");

    highlightFloor(30,0,"#ffff00");

}

function addAllRooms(){
    
    addRooms("GamePositions");
    addRooms("Keys");
    addRooms("Album");
    addRooms("Disc");
    addRooms("Passwords");
    addRooms("GameElements");
    addRooms("P2P");

}

function cascadeHighlights(){

    setTimeout(() => { 
        
        if (cascIndex <= 34){

            highlightFloor(cascIndex,0,"#ff0000");
            cascIndex = cascIndex + 1;
            cascadeHighlights();

        }
    
    }, 1000);

}