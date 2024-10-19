function createButton(myName, xPos, yPos, myWidth, myHeight, myFill, myFunction){

    // .createElementNS() creates an SVG-native element (which is formatted in XML)
    //      ( by contrast, .createElement() creates a DOM-native element (which is formatted in HTML) )

    // NOTE: http://www.w3.org/2000/svg - while looking like a website - is, in fact, a URL designating the XML namespace for manipulating SVG elements
    // IT IS NOT A WEBSITE! This code will work even without internet access and constitutes no dependency vulnerability
    
    // this will be the holding object ("g" == group) to which we will attach a rectangle and a text element
    const GG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        GG.setAttribute("x", xPos);
        GG.setAttribute("y", yPos);

    svg.appendChild(GG);

    const ZZ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ZZ.setAttribute("x", xPos);
        ZZ.setAttribute("y", yPos);
        ZZ.setAttribute("width", myWidth);
        ZZ.setAttribute("height", myHeight);
        ZZ.setAttribute("fill", myFill);
        ZZ.setAttribute("id", myName);

        ZZ.setAttribute("stroke", null);
        ZZ.setAttribute("stroke-width", null);
        ZZ.setAttribute("opacity", 1.0);

        ZZ.setAttribute("onclick", myFunction);

    GG.appendChild(ZZ);

    let idx = GG.children.length - 1;

    GG.children[idx].addEventListener("mouseover", (event) => {

        // console.log("You have now moved the mouse pointer over element " + event.target.id + ".");
        if ((event.target.getAttribute("class") == null) || (event.target.getAttribute("class") == "")){

            event.target.setAttribute("class", "preselected");

        }

    })

    GG.children[idx].addEventListener("mouseleave", (event) => {

        // console.log("You have now moved the mouse pointer away from element " + event.target.id + ".");
        if (event.target.getAttribute("class") == "preselected"){

            event.target.setAttribute("class", "");

        }

    })

    GG.children[idx].addEventListener("click", (event) => {

        if (event.target.getAttribute("class") == "selected"){ event.target.setAttribute("class", ""); }

        if (event.target.getAttribute("class") == "preselected"){ event.target.setAttribute("class", "selected"); }

    })

}

function setStat(myObject, myStatus){

    let obj = document.getElementById(myObject);
    obj.setAttribute("class", myStatus);

    if (myStatus == "pursuing"){

        if (myObject == "Key1"){ addRoom("Key1", 9377, 72, 732, 9387, 72, 742, "#ffff00"); }
        if (myObject == "Key2"){ addRoom("Key2", 9360, 114, 803, 9372, 114, 813, "#ffff00"); }
        if (myObject == "Disc"){ addRoom("Disc", 9377,233,813,9387,233,803, "#ffff00"); }
        if (myObject == "PW1"){ addRoom("PW1", 9316,86,764,9306,86,781, "#ffff00"); }
        if (myObject == "PW2"){ addRoom("PW2", 9316,128,732,9306,128,742, "#ffff00"); }
        if (myObject == "PW3"){ addRoom("PW3", 9321,212,791,9333,212,798, "#ffff00"); }

    }

    if (myStatus == "obtained"){

        if (myObject == "Key1"){ deleteRoom("Key1"); }
        if (myObject == "Key2"){ deleteRoom("Key2"); }
        if (myObject == "AlbumA"){ deleteRoom("Archive"); }

        if (myObject == "Disc"){ deleteRoom("Disc"); }
        if (myObject == "PW1"){ deleteRoom("PW1"); }
        if (myObject == "PW2"){ deleteRoom("PW2"); }
        if (myObject == "PW3"){ deleteRoom("PW3"); }
        if (myObject == "AlbumB"){ deleteRoom("CC"); }

    }

    if (myStatus == "elligible"){

        if (myObject == "AlbumA"){ addRoom("Archive", 9326,268,737,9321,268,745, "#00854d"); }
        if (myObject == "AlbumB"){ addRoom("CC", 9316,156,764,9306,156,781, "#00854d"); }

    }

}

function setAutoStat(myObject){

    console.log("[myControls.js] setAutoStat(" + myObject + "): Hi!");

    let obj = document.getElementById(myObject);
    let stat = obj.getAttribute("class");
    let myStatus = null;

    if (stat == "preselected"){ myStatus = "pursuing"; }
    if (stat == "pursuing"){ myStatus = "obtained"; }
    if (stat == "obtained"){ myStatus = "preselected"; }

    obj.setAttribute("class", myStatus);

    if (myStatus == "pursuing"){

        if (myObject == "Key1"){ addRoom("Key1", 9377, 72, 732, 9387, 72, 742, "#ffff00"); frameLevel(1); }
        if (myObject == "Key2"){ addRoom("Key2", 9360, 114, 803, 9372, 114, 813, "#ffff00"); frameLevel(7); }
        if (myObject == "Disc"){ addRoom("Disc", 9377,233,813,9387,233,803, "#ffff00"); frameLevel(24); }
        if (myObject == "PW1"){ addRoom("PW1", 9316,86,764,9306,86,781, "#ffff00"); frameLevel(3); }
        if (myObject == "PW2"){ addRoom("PW2", 9316,128,732,9306,128,742, "#ffff00"); frameLevel(9); }
        if (myObject == "PW3"){ addRoom("PW3", 9321,212,791,9333,212,798, "#ffff00"); frameLevel(21); }

        if (myObject == "AlbumA"){ addRoom("Archive", 9326,268,737,9321,268,745, "#ffff00"); frameLevel(29); }
        if (myObject == "AlbumB"){ addRoom("CC", 9316,156,764,9306,156,781, "#ffff00"); frameLevel(13); }

        if (myObject == "Pearls"){ addRoom("EnderPearl", 9377, 114, 764, 9387, 114, 781, "#ff00ff"); frameLevel(7, "#ff00ff"); }
        if (myObject == "Tokens"){ addRoom("Token", 9306, 205, 747, 9316, 205, 759, "#ff00ff"); frameLevel(20, "#ff00ff"); }
        if (myObject == "Elytra"){ addRoom("Elytra", 9306, 240, 786, 9316, 240, 798, "#ff00ff"); frameLevel(25, "#ff00ff"); }
        if (myObject == "Potions"){ addRoom("Potions", 9321, 142, 732, 9329, 142, 742, "#ff00ff"); frameLevel(11, "#ff00ff"); }
        if (myObject == "Fake"){ addRoom("FakeNews", 9321, 177, 803, 9333, 177, 813, "#ff00ff"); frameLevel(16, "#ff00ff"); }

        if (myObject == "Hail"){ addRoom("HailMary", 9321,65,781,9328,65,798, "#00ffff"); frameLevel(0, "#00ffff"); }
        if (myObject == "HVAC"){ addRoom("HVAC", 9338, 93, 732, 9355, 93, 742, "#00ffff"); frameLevel(4, "#00ffff"); }
        if (myObject == "COMS"){ addRoom("Communications", 9306, 177, 803, 9316, 177, 813, "#00ffff"); frameLevel(16, "#00ffff"); }

        if (myObject == "P2P"){ 
            
            addRooms("P2P");
            frameLevel(8, "#0000ff");
            frameLevel(10, "#0000ff");
            frameLevel(15, "#0000ff");
            frameLevel(20, "#0000ff");
            frameLevel(25, "#0000ff");
            frameLevel(28, "#0000ff");      
        
        }

    }

    if (myStatus == "obtained"){

        if (myObject == "Key1"){ deleteRoom("Key1"); deframeLevel(1);}
        if (myObject == "Key2"){ deleteRoom("Key2"); deframeLevel(7); }
        if (myObject == "AlbumA"){ deleteRoom("Archive"); deframeLevel(29); }

        if (myObject == "Disc"){ deleteRoom("Disc"); deframeLevel(24); }
        if (myObject == "PW1"){ deleteRoom("PW1"); deframeLevel(3); }
        if (myObject == "PW2"){ deleteRoom("PW2"); deframeLevel(9); }
        if (myObject == "PW3"){ deleteRoom("PW3"); deframeLevel(21); }
        if (myObject == "AlbumB"){ deleteRoom("CC"); deframeLevel(13); }

        if (myObject == "Pearls"){ deleteRoom("EnderPearl"); deframeLevel(7); }
        if (myObject == "Tokens"){ deleteRoom("Token"); deframeLevel(20); }
        if (myObject == "Elytra"){ deleteRoom("Elytra"); deframeLevel(25); }
        if (myObject == "Potions"){ deleteRoom("Potions"); deframeLevel(11); }
        if (myObject == "Fake"){ deleteRoom("FakeNews"); deframeLevel(16); }

        if (myObject == "Hail"){ deleteRoom("HailMary"); deframeLevel(0); }
        if (myObject == "HVAC"){ deleteRoom("HVAC"); deframeLevel(4); }
        if (myObject == "COMS"){ deleteRoom("Communications"); deframeLevel(16); }   
        
        if (myObject == "P2P"){

            deleteRoom("P2P:8");
            deleteRoom("P2P:10-1");
            deleteRoom("P2P:10-2");
            deleteRoom("P2P:15");
            deleteRoom("P2P:20-1");
            deleteRoom("P2P:20-2");
            deleteRoom("P2P:25");
            deleteRoom("P2P:28");

            deframeLevel(8, "#0000ff");
            deframeLevel(10, "#0000ff");
            deframeLevel(15, "#0000ff");
            deframeLevel(20, "#0000ff");
            deframeLevel(25, "#0000ff");
            deframeLevel(28, "#0000ff");

        }

    }

}

function myRotation(){

    console.log("[myControls.js] myRotation(): Hi!");

    if (orbit.autoRotate == true){ orbit.autoRotate = false; } else { orbit.autoRotate = true; }

}