function convertTelemetry(){

    console.log("[displayRecordings.js] convertTelemetry(): Hi!");

    console.log("convertTelemetry(): First stage conversion: Transpose.");

    let temp = [];                

    for (let i = 0; i < telemetry[0].length; i++){

        let temprow = [];

        for (let j = 0; j < 5; j++){

            temprow.push(telemetry[j][i]);

        }

        temp.push(temprow);

    }

    telemetry = temp;

}

function groupTelemetry(){

    console.log("[displayRecordings.js] groupTelemetry(): Second stage conversion: Group by time index.");

    let temp = [];
    for (let i = 0; i < telemetry.length; i++){ temp.push(telemetry[i][0]); }
    temp2 = [...new Set(temp)];

    tlm = [];
    for (let i = 0; i < temp2.length; i++){ 

        let tmparr = [];
        tmparr.push(temp2[i]);
        //tmparr.push(null);

        tlm.push(tmparr);

    }

    for (let i = 0; i < tlm.length; i++){

        for (let j = 0; j < telemetry.length; j++){

            if (tlm[i][0] == telemetry[j][0]){

                for (let k = 0; k < myPlayers.length; k++){

                    let temp = null;

                    if (telemetry[j][1] == myPlayers[k][0]){

                        temp = [];
                        temp.push(telemetry[j][1]);
                        temp.push(telemetry[j][2]);
                        temp.push(telemetry[j][3]);
                        temp.push(telemetry[j][4]);

                    }

                    if (temp != null){ tlm[i].push(temp); }

                }

            }

        }

    }

}

function outpMainLoop(idx){

    setTimeout(() => {
                            
        if (idx < tlm.length){             

            // console.log("[displayRecordings.js] outpMainLoop(" + idx + "): Expecting time stamp " + voidTime + ", finding timestamp " + tlm[idx][0] + ".");

            if (tlm[idx][0] == voidTime){

                console.log("[displayRecordings.js] outpMainLoop(" + idx + "): Timestamp found in telementry equals expected timestamp.");
                dehighlightAllFloors();
                deindicateAllLevels();

                for (let i = 0; i < myPlayers.length; i++){

                    for (let j = 1; j < tlm[idx].length; j++){

                        if (tlm[idx][j][0] == myPlayers[i][0]){

                            let myVec = new THREE.Vector3(tlm[idx][j][1],tlm[idx][j][3],-tlm[idx][j][2]);
                            scene.children[myPlayers[i][3]].position.x = myVec.x;
                            scene.children[myPlayers[i][3]].position.y = myVec.y;
                            scene.children[myPlayers[i][3]].position.z = myVec.z;

                            indicatePlayerFloor(i,myVec);

                        }

                    }

                }                

                voidIndex = voidIndex + 1;

            }        
            
            outpMainLoop(voidIndex);
            voidTime = voidTime + 1;
        
        }

    }, 1000);                

}