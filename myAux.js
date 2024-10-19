function onPointerMove(event){

    pointer.x = (event.clientX / window.innerWidth)*2 - 1;
    pointer.y = -(event.clientY / window.innerHeight)*2 + 1;

}

function addLight(x, y, z, color){

    const intensity = 3;
    const distance = 0;
    const decay = 2;
    const light = new THREE.DirectionalLight(color, intensity);
    // const light = new THREE.PointLight(color, intensity, distance, decay);
    light.position.set(x, y, z);
    scene.add(light);

    let myX = light.position.x;
    let myY = light.position.y;
    let myZ = light.position.z;

    let myVec = new THREE.Vector3(myX, myY, myZ);
    addSphere(myVec, '#ffffff');

}

function fiatLux(){

    console.log("fiatLux(): Let there be light.");

    // lighting with cool shadow effect, NW-NE-SE-SW
    /*
    addLight(9298-50,300,724-50,0xffffff);
    addLight(9390+50,300,724-50,0xffffff);
    addLight(9390+50,300,816+50,0xffffff);
    addLight(9298-50,300,816+50,0xffffff);
    */

    addLight(10, 10, -10, 0xffffff);
    addLight(10, 10, 10, 0xffffff);
    addLight(-10, 10, -10, 0xffffff);
    addLight(10, -10, -10, 0xffffff);

}

function addGaugeElements(){

    console.log("addGaugeElement(): Adding axis helper, grid, and gauge spheres.");

    axes = new THREE.AxesHelper(5.0);
    axes.position.x = 9346.5;
    axes.position.y = 772.5;
    axes.position.z = -65;
    scene.add(axes);

    grid = new THREE.GridHelper(100,10,0x002044,0x202030);
    grid.rotation.x = Math.PI/2;
    grid.position.x = 9346.5;
    grid.position.y = 772.5;
    grid.position.z = -65;
    scene.add(grid);

}

function addSphere(myPos, myColour){

    console.log("addSphere(): Adding " + myColour + " sphere at (" + myPos.x + ", " + myPos.y + ", " + myPos.z + ").");

    const geometry = new THREE.SphereGeometry(2, 32, 16);
    const material = new THREE.MeshPhongMaterial({ color: myColour, transparent: false });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.x = myPos.x;
    sphere.position.y = myPos.z;
    sphere.position.z = -myPos.y;

    scene.add(sphere);

}

function addColumn(columnSize, columnPosition){

    let columnSide = 0;
    if (columnSize==1){ columnSide = 6; }
    if (columnSize==2){ columnSide = 4; }
    if (columnSize==3){ columnSide = 2; }

    const geometry = new THREE.BoxGeometry(columnSide,columnSide,245);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const column = new THREE.Mesh(geometry, material);

    column.position.x = columnPosition.x + columnSide/2;  
    column.position.y = columnPosition.z + columnSide/2;
    column.position.z = -columnPosition.y - 245/2;

    scene.add(column);

}

function addPrimaryColumns(){

    // console.log("[myAux.js] addPrimaryColumns(): Hi.");

    addColumn(1, new THREE.Vector3(9298,65,724)); // NW
    addColumn(1, new THREE.Vector3(9390,65,724)); // NE
    addColumn(1, new THREE.Vector3(9390,65,816)); // SE
    addColumn(1, new THREE.Vector3(9298,65,816)); // SW

}

function addSecondaryColumns(){

    // console.log("[myAux.js] addSecondaryColumns(): Hi.");

    addColumn(2, new THREE.Vector3(9334,65,726)); // NW
    addColumn(2, new THREE.Vector3(9356,65,726));

    addColumn(2, new THREE.Vector3(9390,65,760)); // NE
    addColumn(2, new THREE.Vector3(9390,65,782)); 
    
    addColumn(2, new THREE.Vector3(9356,65,816)); // SE
    addColumn(2, new THREE.Vector3(9334,65,816)); 
    
    addColumn(2, new THREE.Vector3(9300,65,782)); // SW
    addColumn(2, new THREE.Vector3(9300,65,760));

}

function addTertiaryColumns(){

    // console.log("[myAux.js] addTertiaryColumns(): Hi.");

    // NW

    addColumn(3, new THREE.Vector3(9310,65,728));
    addColumn(3, new THREE.Vector3(9318,65,728));
    addColumn(3, new THREE.Vector3(9326,65,728));

    addColumn(3, new THREE.Vector3(9366,65,728));
    addColumn(3, new THREE.Vector3(9374,65,728));
    addColumn(3, new THREE.Vector3(9382,65,728));    

    // NE

    addColumn(3, new THREE.Vector3(9390,65,736));
    addColumn(3, new THREE.Vector3(9390,65,744));
    addColumn(3, new THREE.Vector3(9390,65,752));

    addColumn(3, new THREE.Vector3(9390,65,792));
    addColumn(3, new THREE.Vector3(9390,65,800));
    addColumn(3, new THREE.Vector3(9390,65,808));

    // SE

    addColumn(3, new THREE.Vector3(9382,65,816));
    addColumn(3, new THREE.Vector3(9374,65,816));
    addColumn(3, new THREE.Vector3(9366,65,816));

    addColumn(3, new THREE.Vector3(9326,65,816));
    addColumn(3, new THREE.Vector3(9318,65,816));
    addColumn(3, new THREE.Vector3(9310,65,816));

    // SW

    addColumn(3, new THREE.Vector3(9302,65,808));
    addColumn(3, new THREE.Vector3(9302,65,800));
    addColumn(3, new THREE.Vector3(9302,65,792));

    addColumn(3, new THREE.Vector3(9302, 65, 752));
    addColumn(3, new THREE.Vector3(9302, 65, 744));
    addColumn(3, new THREE.Vector3(9302, 65, 736));

}

function addColumns(){

    addPrimaryColumns();
    addSecondaryColumns();
    addTertiaryColumns();

}

function addFloor(index, myZ){

    const geometry = new THREE.BoxGeometry(84,84,5);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const floor = new THREE.Mesh(geometry, material);

    // floor.rotation.x = Math.PI/2;

    floor.position.x = 9305 + 84/2;
    floor.position.y = 731 + 84/2;
    floor.position.z = -myZ - 5/2;

    scene.add(floor);

    let latestIndex = scene.children.length - 1;

    const myFloor = new Object();
    myFloor.name = "Floor " + index;
    myFloor.type = "full";
    myFloor.highlight = false;
    myFloor.highlightMode = null;
    myFloor.highlightColour = null;
    myFloor.index1 = latestIndex;
    myFloor.uuid1 = scene.children[latestIndex].uuid;
    myFloor.index2 = null;
    myFloor.uuid2 = null;
    floorsArray.push(myFloor);

}

function addHalfFloor(myF, index){

    let myZ = 65 + index*7;

    // console.log("Adding half floor for z=" + myZ);

    const geometry = new THREE.BoxGeometry(84,33,5);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const halffloor = new THREE.Mesh(geometry, material);

    halffloor.position.x = 9305 + 84/2;
    halffloor.position.y = 731 + myF*51 + 33/2;
    halffloor.position.z = -myZ - 5/2;

    scene.add(halffloor);  
    
    let latestIndex = scene.children.length - 1;

    if (myF == 0){

        const myFloor = new Object();
        myFloor.name = "Floor " + index;
        myFloor.type = "half";
        myFloor.highlight = false;
        myFloor.highlightMode = null;
        myFloor.highlightColour = null;
        myFloor.index1 = latestIndex;
        myFloor.uuid1 = scene.children[latestIndex].uuid;
        myFloor.index2 = null;
        myFloor.uuid2 = null;
        floorsArray.push(myFloor);

    }

    if (myF == 1){

        floorsArray[index].index2 = latestIndex;
        floorsArray[index].uuid2 = scene.children[latestIndex].uuid;

    }



}

function addFloors(){

    console.log("[myAux.js] addFloors(): Adding floors.");

    for (let i = 0; i <= 24; i++){ addFloor(i, 65 + i*7); }

    for (let i = 25; i < 29; i++){ 
        
        addHalfFloor(0, i);  // first half
        addHalfFloor(1, i); // second half } 
    
    }

    for (let i = 29; i <= 34; i++){ addFloor(i, 65 + i*7); }

}

function addWireFrame(myName, myType, xPos, yPos, zPos, myWidth, myLength, myHeight, myColour){

    const geometry = new THREE.BoxGeometry(myWidth, myLength, myHeight);
    const edges = new THREE.EdgesGeometry (geometry);
    const wire = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: myColour}));

    wire.position.x = xPos + myWidth/2;  
    wire.position.y = yPos + myLength/2;
    wire.position.z = -zPos - myHeight/2;

    scene.add(wire);

    let latestIndex = scene.children.length - 1;

    const myFrame = new Object();
    myFrame.name = myName;
    myFrame.type = myType;
    myFrame.index1 = latestIndex;
    myFrame.uuid1 = scene.children[latestIndex].uuid;
    myFrame.colour = myColour;
    wireframesArray.push(myFrame);    

}

function addRoom(name, X1, Y1, Z1, X2, Y2, Z2, myColour){

    // BEWARE !!!
    // Minecraft uses (x,z) for the 2D plane and y as the height coordinate
    // THREE.js uses (x,y) as the 2D plane and z as the height coordinate
    // Input to this function uses the MINECRAFT CONVENTION

    let myX = null;
    let myWidth = null;
    if (X1 < X2){ myWidth = X2 - X1; myX = X1; } else { myWidth = X1 - X2; myX = X2; }
    
    let myZ = null;
    let myHeight = null;
    if (Y1 < Y2){ myHeight = Y2 - Y1; myZ = Y1; } else { myHeight = Y1 - Y2; myZ = Y2; }
    if (myHeight == 0){ myHeight = 5; } // standard height for a room

    let myY = null;
    let myDepth = null;
    if (Z1 < Z2){ myDepth = Z2 - Z1; myY = Z1; } else { myDepth = Z1 - Z2; myY = Z2; }

    console.log("addRoom(): Adding room named " + name + " with dimensions " + myWidth + "x" + myHeight + "x" + myDepth + ".");
    addWireFrame(name, "Room", myX, myY, myZ, myWidth, myDepth, myHeight, myColour)

}

function addRooms(myParameter){

    console.log("[myAux.js] addRooms(" + myParameter  + "): Hi.");

    if (myParameter == "GamePositions"){

        addRoom("ReadyRoom", 9359, 55, 609, 9374, 61, 632, "#ff0000");
        addRoom("Defence",9345, 163, 755, 9350, 163, 760, "#00ff00");

    }

    if (myParameter == "Keys"){

        addRoom("Key1", 9377, 72, 732, 9387, 72, 742, "#ffff00");
        addRoom("Key2", 9360, 114, 803, 9372, 114, 813, "#ffff00");
        addRoom("Key3", 9377, 170, 813, 9387, 170, 803, "#ffff00");
        addRoom("Key4", 9372, 254, 783, 9357, 254, 796, "#ffff00");

    }

    if (myParameter == "Album"){

        addRoom("Archive", 9326,268,737,9321,268,745, "#ffffff");
        addRoom("CC", 9316,156,764,9306,156,781, "#ffffff");

    }

    if (myParameter == "Disc"){

        addRoom("Disc", 9377,233,813,9387,233,803, "#00ff00");

    }    

    if (myParameter == "Passwords"){

        addRoom("PW1", 9316,86,764,9306,86,781, "#00ffff");
        addRoom("PW2", 9316,128,732,9306,128,742, "#00ffff");
        addRoom("PW3", 9321,212,791,9333,212,798, "#00ffff");
        
    }

    if (myParameter == "GameElements"){

        addRoom("HailMary", 9321,65,781,9328,65,798, "#ff00ff");
        addRoom("Token", 9306, 205, 747, 9316, 205, 759, "#ff00ff");
        addRoom("EnderPearl", 9377, 114, 764, 9387, 114, 781, "#ff00ff");
        addRoom("Potions", 9321, 142, 732, 9329, 142, 742, "#ff00ff");
        addRoom("Elytra", 9306, 240, 786, 9316, 240, 798, "#ff00ff");
        addRoom("HVAC", 9338, 93, 732, 9355, 93, 742, "#ff00ff");
        addRoom("Communications", 9306, 177, 803, 9316, 177, 813, "#ff00ff");
        addRoom("FakeNews", 9321, 177, 803, 9333, 177, 813, "#ff00ff");

    }

    if (myParameter == "P2P"){

        addRoom("P2P:8",9321, 121, 732, 9333, 121, 742,"#0000ff");
        addRoom("P2P:10-1",9321, 135, 764, 9327, 135, 781,"#0000ff");
        addRoom("P2P:10-2",9360, 135, 792, 9372, 135, 798,"#0000ff");
        addRoom("P2P:15",9338, 170, 782, 9351, 170, 798,"#0000ff");
        addRoom("P2P:20-1",9360, 205, 747, 9372, 205, 754,"#0000ff");
        addRoom("P2P:20-2",9338, 205, 803, 9355, 205, 813,"#0000ff");
        addRoom("P2P:25",9377, 240, 786, 9387, 240, 798,"#0000ff");
        addRoom("P2P:28",9338, 261, 783, 9355, 261, 798,"#0000ff");

    }

}

function addElevators(){

    console.log("[myAux.js] addElevators(): Hi.");

}

function addAtriums(){

    console.log("[myAux.js] addAtriums(): Hi.");
    addWireFrame("Foyer", "Atrium", 9329, 755, 65, 36, 36, 5*7, "#808080");
    addWireFrame("Hotel Lobby", "Atrium", 9329, 755, 65+10*7, 36, 36, 3*7, "#808080");
    addWireFrame("20", "Atrium", 9329, 755, 65+20*7, 36, 36, 3*7-2, "#808080");
    addWireFrame("Art Gallery", "Atrium", 9329, 755, 65+23*7, 36, 36, 2*7, "#808080");
    addWireFrame("30", "Atrium", 9329, 755, 65+30*7, 36, 36, 3*7, "#808080");

}

function addWireElements(){

    console.log("[myAux.js] addWireElements(): Hi!");

    addElevators();
    addAtriums();

}

function addCube(posX, posY, posZ){

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.9});
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = posX + .5;
    cube.position.y = posZ + .5;
    cube.position.z = -posY + .5;

    logoGroup.add(cube);

}

function addLogo(){

    logoGroup = new THREE.Group();

    // opening bracket '['
    for (let i = 0; i < 9; i++){ addCube(9387,287-i,726); }
    addCube(9386,287,726);
    addCube(9386,279,726);

    // 'M'
    for (let i = 0; i < 5; i++){ addCube(9385,285-i,726); }
    addCube(9384,285,726);
    for (let i = 0; i < 2; i++){ addCube(9383,284-i,726); }
    addCube(9382,285,726);
    for (let i = 0; i < 5; i++){ addCube(9381,285-i,726); }

    // 'r'
    for (let i = 0; i < 3; i++){ addCube(9379,283-i,726); }
    addCube(9378,283,726);

    // 'P'
    for (let i = 0; i < 5; i++){ addCube(9376,285-i,726); }
    addCube(9375,285,726);
    addCube(9375,283,726);
    for (let i = 0; i < 2; i++){ addCube(9374,284-i,726); }

    // closing bracket ']'
    for (let i = 0; i < 9; i++){ addCube(9372,287-i,726); }
    addCube(9373,287,726);
    addCube(9373,279,726);

    scene.add(logoGroup);

}

function addLine(sX, sY, sZ, dX, dY, dZ, myColour){

    const material = new THREE.LineBasicMaterial({ color: myColour });

    let myStart = new THREE.Vector3(sX, sZ, -sY);
    let myDestination = new THREE.Vector3(dX, dZ, -dY);

    const points = [];
    points.push(myStart);
    points.push(myDestination);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    scene.add(line);

}

function addP2P(){

    console.log("[myAux.js] addP2P: Adding Position-to-Position teleportation lines.");

    // 08th floor
    addLine(9328, 121, 738, 9347, 156, 795, "#0000ff");
    addLine(9328, 121, 738, 9347, 191, 757, "#0000ff");

    // 10th floor
    addLine(9367, 135, 793, 9382, 205, 793, "#0000ff");
    addLine(9323, 135, 770, 9318, 240, 731, "#0000ff");

    // 15th floor
    addLine(9344, 170, 787, 9343, 219, 763, "#0000ff");

    // 20th floor
    addLine(9346, 205, 809, 9384, 275, 758, "#0000ff");
    addLine(9367, 205, 752, 9365, 65, 736, "#0000ff");

    // 25th floor
    addLine(9380, 240, 798, 9892, 63, 1678, "#0000ff");

    // 28th floor
    addLine(9348, 261, 787, 9389, 198, 784, "#0000ff");

}

function addPlayer(myName, myColour){

    let myVector = new THREE.Vector3(0,0,0);
    addSphere(myVector, myColour);

    let myIndex = scene.children.length;
    mySphere = scene.children[myIndex-1].uuid;

    console.log("addPlayer(): Player position indicator added with uuid " + mySphere + " at scene.children index " + (myIndex-1) + ".");

    let temp = [];
    temp.push(myName);
    temp.push(myColour);
    temp.push(mySphere);
    temp.push(myIndex-1);

    myPlayers.push(temp);

}

function removePlayer(myName){

    console.log("[myAux.js] removePlayer(" + myName + "): Called.");

    let myPlayersIdx = null;
    let sceneIdx = null;

    for (let i = 0; i < myPlayers.length; i++){

        if (myPlayers[i][0] == myName){

            console.log("[myAux.js] removePlayer(): Found player " + myName + " at myPlayers[" + i + "].");

            myPlayersIdx = i;
            break;

        }

    }

    if (myPlayersIdx != null){

        let myUUID = myPlayers[myPlayersIdx][2];

        for (let i = 0; i < scene.children.length; i++){

            if (scene.children[i].uuid == myUUID){

                sceneIdx = i;
                break;

            }

        }

        scene.children[sceneIdx].name = "deleteMe";
        let deleteObject = scene.getObjectByName("deleteMe");
        scene.remove(deleteObject);
        myPlayers.splice(myPlayersIdx, 1);

    } else {

        console.log("[myAux.js] removePlayer(): ERROR: Could not find player '" + myName + "'.");

    }

}

function highlightFloor(myFloor, myMode, myColour){

    // mode: 0 = wireframe, 1 = colouring of volume
    // myColour in format "#808080"

    // console.log("[myAux.js] highlightFloor(" + myFloor + ", " + myMode + ", " + myColour + "): Hi.");

    let myY = 65 + myFloor*7;

    floorsArray[myFloor].highlight = true;
    floorsArray[myFloor].highlightColour = myColour;

    if (myMode == 0){

        addWireFrame("Floor " + myFloor, "Floor", 9305, 731, myY, 84, 84, 5, myColour);        
        floorsArray[myFloor].highlightMode = myMode;        

    }

    if (myMode == 1){

        floorsArray[myFloor].highlightMode = myMode;

    }

}

function deleteRoom(myRoom){

    console.log("[myAux.js] deleteRoom(" + myRoom + "): Deleting selected room from scene.");

    let deleteUUID = null;
    let deletePointer = null;
    let deleteIndex = null;

    // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Finding floor '" + myFloorName + "'...");
    
    for (let i = 0; i < wireframesArray.length; i++){

        if (wireframesArray[i].name == myRoom){

            deleteUUID = wireframesArray[i].uuid1; 
            deletePointer = i;           
            // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Found it! It has scene uuid " + deleteUUID + ".");
            break;

        }

    }

    for (let i = 0; i < scene.children.length; i++){

        if (scene.children[i].uuid == deleteUUID){ 

            deleteIndex = i;
            break;

         }

    }

    if (deleteIndex != null){

        scene.children[deleteIndex].name = "deleteMe";
        let deleteObject = scene.getObjectByName("deleteMe");
        scene.remove(deleteObject);

        wireframesArray.splice(deletePointer, 1);

    }

}

function dehighlightFloor(myFloor){

    // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Deleting selected floor from scene.");

    let deleteUUID = null;
    let deletePointer = null;
    let deleteIndex = null;
    let myFloorName = "Floor " + myFloor;

    // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Finding floor '" + myFloorName + "'...");
    
    for (let i = 0; i < wireframesArray.length; i++){

        if (wireframesArray[i].name == myFloorName){

            deleteUUID = wireframesArray[i].uuid1; 
            deletePointer = i;           
            // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Found it! It has scene uuid " + deleteUUID + ".");
            break;

        }

    }

    for (let i = 0; i < scene.children.length; i++){

        if (scene.children[i].uuid == deleteUUID){ 

            deleteIndex = i;
            break;

         }

    }

    if (deleteIndex != null){

        scene.children[deleteIndex].name = "deleteMe";
        let deleteObject = scene.getObjectByName("deleteMe");
        scene.remove(deleteObject);

        wireframesArray.splice(deletePointer, 1);

    }

}

function dehighlightAllFloors(){

    // console.log("[myAux.js] dehighlightAllFloors(): Hi!");

    let myBatch = [];

    for (let i = 0; i < wireframesArray.length; i++){

        if (wireframesArray[i].type == "Floor"){ myBatch.push(wireframesArray[i].name); }

    }

    // console.log("[myAux.js] dehighlightAllFloors(): myBatch has length " + myBatch.length);

    for (let i = 0; i < myBatch.length; i++){

        let floorInt = myBatch[i].substring(6);
        // console.log("floorInt = " + floorInt);
        floorInt = parseInt(floorInt);
        // console.log("floorInt = " + floorInt);
        dehighlightFloor(floorInt);

    }

}

function indicatePlayerFloor(idx,vec){

    // console.log("[myAux.js] indicatePlayerFloor(" + idx + ": Hi!");

    // idx: index in myPlayers[idx]
    // vec: current position of that player

    let currentFloor = null;

    // CORNERS OF THE INTERIOR FLOOR SPACE
    // NW:[9.306, 732], NE:[9.387, 732], SE:[9.387, 813], SW:[9.306, 813]

    vec.z = -vec.z;

    if ((vec.x >= 9306) && (vec.x <=9387) && (vec.y >= 732) && (vec.y <= 813)){

        if ((vec.z >= 65) && (vec.z <= 71)){ currentFloor = 0; }
        if ((vec.z >= 72) && (vec.z <= 78)){ currentFloor = 1; }
        if ((vec.z >= 79) && (vec.z <= 85)){ currentFloor = 2; }
        if ((vec.z >= 86) && (vec.z <= 92)){ currentFloor = 3; }
        if ((vec.z >= 93) && (vec.z <= 99)){ currentFloor = 4; }
        if ((vec.z >= 100) && (vec.z <= 106)){ currentFloor = 5; }
        if ((vec.z >= 107) && (vec.z <= 113)){ currentFloor = 6; }
        if ((vec.z >= 114) && (vec.z <= 120)){ currentFloor = 7; }
        if ((vec.z >= 121) && (vec.z <= 127)){ currentFloor = 8; }
        if ((vec.z >= 128) && (vec.z <= 134)){ currentFloor = 9; }
        if ((vec.z >= 135) && (vec.z <= 141)){ currentFloor = 10; }
        if ((vec.z >= 142) && (vec.z <= 148)){ currentFloor = 11; }
        if ((vec.z >= 149) && (vec.z <= 155)){ currentFloor = 12; }
        if ((vec.z >= 156) && (vec.z <= 162)){ currentFloor = 13; }
        if ((vec.z >= 163) && (vec.z <= 169)){ currentFloor = 14; }
        if ((vec.z >= 170) && (vec.z <= 176)){ currentFloor = 15; }
        if ((vec.z >= 177) && (vec.z <= 183)){ currentFloor = 16; }
        if ((vec.z >= 184) && (vec.z <= 190)){ currentFloor = 17; }
        if ((vec.z >= 191) && (vec.z <= 197)){ currentFloor = 18; }
        if ((vec.z >= 198) && (vec.z <= 204)){ currentFloor = 19; }
        if ((vec.z >= 205) && (vec.z <= 211)){ currentFloor = 20; }
        if ((vec.z >= 212) && (vec.z <= 218)){ currentFloor = 21; }
        if ((vec.z >= 219) && (vec.z <= 225)){ currentFloor = 22; }
        if ((vec.z >= 226) && (vec.z <= 232)){ currentFloor = 23; }
        if ((vec.z >= 233) && (vec.z <= 239)){ currentFloor = 24; }
        if ((vec.z >= 240) && (vec.z <= 246)){ currentFloor = 25; }
        if ((vec.z >= 247) && (vec.z <= 253)){ currentFloor = 26; }
        if ((vec.z >= 254) && (vec.z <= 260)){ currentFloor = 27; }
        if ((vec.z >= 261) && (vec.z <= 267)){ currentFloor = 28; }
        if ((vec.z >= 268) && (vec.z <= 274)){ currentFloor = 29; }
        if ((vec.z >= 275) && (vec.z <= 281)){ currentFloor = 30; }
        if ((vec.z >= 282) && (vec.z <= 288)){ currentFloor = 31; }
        if ((vec.z >= 289) && (vec.z <= 295)){ currentFloor = 32; }
        if ((vec.z >= 296) && (vec.z <= 302)){ currentFloor = 33; }
        if ((vec.z >= 303) && (vec.z <= 309)){ currentFloor = 34; }
        // if ((vec.z >= 310) && (vec.z <= 313)){ currentFloor = "Roof"; }

    }

    // console.log("[myAux.js] indicatePlayerFloor(" + idx + ", " + JSON.stringify(vec) + ": Player " + myPlayers[idx][0] + " is on floor " + currentFloor + ".");

    if (currentFloor != null){

        let thisColour = myPlayers[idx][1];

        let myBatch = [];

        for (let i = 0; i < wireframesArray.length; i++){
    
            if (wireframesArray[i].type == "Floor"){ myBatch.push(wireframesArray[i].name); }
    
        }
    
        // console.log("[myAux.js] dehighlightAllFloors(): myBatch has length " + myBatch.length);
    
        for (let i = 0; i < myBatch.length; i++){
    
            let floorInt = myBatch[i].substring(6);
            // console.log("floorInt = " + floorInt);
            floorInt = parseInt(floorInt);
            // console.log("floorInt = " + floorInt);
            if (floorInt == currentFloor){ 
                
                dehighlightFloor(floorInt);
                deindicateLevel(floorInt);
                thisColour = "#ffffff"; 
            
            }
    
        }        
        
        highlightFloor(currentFloor, 0, thisColour);
        indicateLevel(currentFloor, thisColour);

    }

}

function indicateLevel(lvl, clr){

    // console.log("[myAux.js] indicateLevel(" + lvl + ", " + clr + ": Hi!");
    svglvl.children[lvl].children[0].setAttribute("class", "");
    svglvl.children[lvl].children[0].setAttribute("fill", clr);

}

function deindicateLevel(lvl){

    svglvl.children[lvl].children[0].setAttribute("class", "none");

}

function frameLevel(lvl, clr){

    if ((clr == "") || (clr == null)){ myColour = "#ffff00"; } else { myColour = clr }

    svglvl.children[lvl].children[0].setAttribute("stroke", myColour);
    svglvl.children[lvl].children[0].setAttribute("stroke-width", 1);

}

function deframeLevel(lvl){

    svglvl.children[lvl].children[0].setAttribute("stroke-width", 0);

}

function deindicateAllLevels(){

    for (let i = 0; i < svglvl.children.length; i++){

        svglvl.children[i].children[0].setAttribute("class", "none");

    }

}

function addRect(myName, xPos, yPos, myWidth, myHeight, mysvg, myDesignation, myFunction){

    // .createElementNS() creates an SVG-native element (which is formatted in XML)
    //      ( by contrast, .createElement() creates a DOM-native element (which is formatted in HTML) )

    // NOTE: http://www.w3.org/2000/svg - while looking like a website - is, in fact, a URL designating the XML namespace for manipulating SVG elements
    // IT IS NOT A WEBSITE! This code will work even without internet access and constitutes no dependency vulnerability

    // this will be the holding object ("g" == group) to which we will attach a rectangle and a text element
    const GG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        GG.setAttribute("x", xPos);
        GG.setAttribute("y", yPos);

    mysvg.appendChild(GG);

    const ZZ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ZZ.setAttribute("x", xPos);
        ZZ.setAttribute("y", yPos);
        ZZ.setAttribute("width", myWidth);
        ZZ.setAttribute("height", myHeight);
        ZZ.setAttribute("fill", "#555555");
        ZZ.setAttribute("id", myName);
        ZZ.setAttribute("class", "none");

        ZZ.setAttribute("stroke", null);
        ZZ.setAttribute("stroke-width", null);
        ZZ.setAttribute("opacity", 1.0);

    GG.appendChild(ZZ);

    if (myFunction != null){

        ZZ.setAttribute("onclick", myFunction);
        let idx = GG.children.length - 1;

        GG.children[idx].addEventListener("mouseover", (event) => {

            // console.log("You have now moved the mouse pointer over element " + event.target.id + ".");
            if (event.target.getAttribute("class") == "none"){

                event.target.setAttribute("class", "preselected");

            }

        })

        GG.children[idx].addEventListener("mouseleave", (event) => {

            // console.log("You have now moved the mouse pointer away from element " + event.target.id + ".");
            if (event.target.getAttribute("class") == "preselected"){

                event.target.setAttribute("class", "none");

            }

        })

        GG.children[idx].addEventListener("click", (event) => {

            if (event.target.getAttribute("class") == "on"){ event.target.setAttribute("class", "none"); }

            if (event.target.getAttribute("class") == "preselected"){ event.target.setAttribute("class", "on"); }

        })

    }

    let offSetX = 0;
    if (myDesignation.length == 1){ offSetX = myWidth/2 - 3; }
    if (myDesignation.length == 2){ offSetX = myWidth/2 - 7; }
    if (myDesignation.length == 3){ offSetX = myWidth/2 - 11; }
    if (myDesignation.length == 6){ offSetX = myWidth/2 - 12; }
    if (myDesignation.length > 6){ offSetX = myWidth/2 - 28; }

    const TT = document.createElementNS("http://www.w3.org/2000/svg", "text");
        TT.setAttribute("x", xPos + offSetX);
        TT.setAttribute("y", yPos + myHeight/2 + 5);
        TT.setAttribute("fill", "#ffffff");
        TT.textContent = myDesignation;
    GG.appendChild(TT);

}

function addRect2(myName, xPos, yPos, myWidth, myHeight, mysvg, myDesignation, myFunction){

    // .createElementNS() creates an SVG-native element (which is formatted in XML)
    //      ( by contrast, .createElement() creates a DOM-native element (which is formatted in HTML) )

    // NOTE: http://www.w3.org/2000/svg - while looking like a website - is, in fact, a URL designating the XML namespace for manipulating SVG elements
    // IT IS NOT A WEBSITE! This code will work even without internet access and constitutes no dependency vulnerability

    // this will be the holding object ("g" == group) to which we will attach a rectangle and a text element
    const GG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        GG.setAttribute("x", xPos);
        GG.setAttribute("y", yPos);

    mysvg.appendChild(GG);

    const ZZ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ZZ.setAttribute("x", xPos);
        ZZ.setAttribute("y", yPos);
        ZZ.setAttribute("width", myWidth);
        ZZ.setAttribute("height", myHeight);
        ZZ.setAttribute("fill", "#555555");
        ZZ.setAttribute("id", myName);
        ZZ.setAttribute("class", "none");

        ZZ.setAttribute("stroke", null);
        ZZ.setAttribute("stroke-width", null);
        ZZ.setAttribute("opacity", 1.0);

    GG.appendChild(ZZ);

    if (myFunction != null){

        ZZ.setAttribute("onclick", myFunction);
        let idx = GG.children.length - 1;

        GG.children[idx].addEventListener("mouseover", (event) => {

            // console.log("You have now moved the mouse pointer over element " + event.target.id + ".");
            if (event.target.getAttribute("class") == "none"){

                event.target.setAttribute("class", "preselected");

            }

        })

        GG.children[idx].addEventListener("mouseleave", (event) => {

            // console.log("You have now moved the mouse pointer away from element " + event.target.id + ".");
            if (event.target.getAttribute("class") == "preselected"){

                event.target.setAttribute("class", "none");

            }

        })

    }

    let offSetX = 0;
    if (myDesignation.length == 1){ offSetX = myWidth/2 - 3; }
    if (myDesignation.length == 2){ offSetX = myWidth/2 - 7; }
    if (myDesignation.length == 3){ offSetX = myWidth/2 - 11; }
    if (myDesignation.length > 3){ offSetX = myWidth/2 - 28; }

    const TT = document.createElementNS("http://www.w3.org/2000/svg", "text");
        TT.setAttribute("x", xPos + offSetX);
        TT.setAttribute("y", yPos + myHeight/2 + 5);
        TT.setAttribute("fill", "#ffffff");
        TT.textContent = myDesignation;
    GG.appendChild(TT);

}