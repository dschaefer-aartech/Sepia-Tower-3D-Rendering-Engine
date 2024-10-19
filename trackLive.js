function startAjax(){
                
    addPlayers();    
    ajaxMyPositions();

}

function stopAjax(){ myPosTrackFlag = false; }

function ajaxMyPositions(){

    console.log("ajaxMyPosition(): Fetching last ten entries from NITRADO database ... but with AJAX!");
    myPositions = null;

    $.ajax({
        url: "fetch.php",
        method: "GET",
        success:function(results) {
            myPositions = JSON.parse(results);
            convertMyPositions();
            dehighlightAllFloors();
            deindicateAllLevels()
            updatePlayerPositions();
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
        }

    });

    setTimeout(() => { 
        
        if (myPosTrackFlag == true) { 
            
            ajaxMyPositions(); 
        
        } 
    
    }, 1000);

}

function convertMyPositions(){

    console.log("convertMyPosition(): Yo, I'm on it, dog!");

    let temp = [];                

    for (let i = 0; i < myPositions[0].length; i++){

        let temprow = [];

        for (let j = 0; j < 5; j++){

            temprow.push(myPositions[j][i]);

        }

        temp.push(temprow);

    }

    myPositions = temp;

}

function updatePlayerPositions(){

    // console.log("updatePlayerPositions(): Processing...");

    let latest = 0;

    for (let i = 0; i < myPositions.length; i++){

        if (myPositions[i][0] > latest){ latest = myPositions[i][0]; }

    }

    console.log("updatePlayerPositions(): Found latest time index " + latest + ".");

    let counter = 0;

    for (let i = 0; i < myPositions.length; i++){

        if (myPositions[i][0] == latest){ counter = counter + 1; }

    }

    console.log("updatePlayerPositions(): Found " + counter + " entries for this latest time index.");

    for (let j = 0; j < myPlayers.length; j++){

        for (let i = 0; i < myPositions.length; i++){

            if ((myPositions[i][0] == latest) && (myPositions[i][1] == myPlayers[j][0])){

                // update player's sphere here with positions gained from the database
                console.log("updatePlayerPositions(): Found player " + myPlayers[j][0] + ".");

                let sceneIndex = null;

                for (let k = 0; k < scene.children.length; k++){

                    if (scene.children[k].uuid == myPlayers[j][2]){

                        console.log("updatePlayerPositions(): Identified scene index " + k + " for player " + myPlayers[j][0] + ".");
                        sceneIndex = k;
                        break;

                    }

                }

                if (sceneIndex != null){

                    console.log("updatePlayerPositions(): Updating position.");

                    let myVec = new THREE.Vector3(myPositions[i][2], myPositions[i][4], -myPositions[i][3]);
                    scene.children[sceneIndex].position.x = myVec.x;
                    scene.children[sceneIndex].position.y = myVec.y;
                    scene.children[sceneIndex].position.z = myVec.z;

                    indicatePlayerFloor(j,myVec); // i: index in myPlayers[i], vec: current position of that player

                }

            }

        }

    }

}