function addTower(){

    console.log("addTower(): Enter the main character.");

    addColumns();
    addFloors();
    addWireElements();
    addLogo();

}

function addPlayers(){

    console.log("[myFunctions.js] addPlayers(): Hi!");

    addPlayer('Hyalan','#00ff00');
    addPlayer('Robstar558','#ff4400');
    addPlayer('M0ost3r','#8800ff');
    addPlayer('fabi_gaming09', '#0000ff');
    addPlayer('Laura247', '#ff369b');
    addPlayer('NiklasPFR', '#b2ffff');
    addPlayer('McLukas1909', '#ffff00');
    addPlayer('LookasGaming', '#ffff00');
    addPlayer('diamit123', '#880000');

}

function addLevels(){

    console.log("[myFunctions.js] addLevels(): Hi.");

    addRect("00", 0, 714, 20, 20, svglvl, "00");
    addRect("01", 0, 693, 20, 20, svglvl, "01");
    addRect("02", 0, 672, 20, 20, svglvl, "02");
    addRect("03", 0, 651, 20, 20, svglvl, "03");
    addRect("04", 0, 630, 20, 20, svglvl, "04");
    addRect("05", 0, 609, 20, 20, svglvl, "05");
    addRect("06", 0, 588, 20, 20, svglvl, "06");
    addRect("07", 0, 567, 20, 20, svglvl, "07");
    addRect("08", 0, 546, 20, 20, svglvl, "08");
    addRect("09", 0, 525, 20, 20, svglvl, "09");
    addRect("10", 0, 504, 20, 20, svglvl, "10");
    addRect("11", 0, 483, 20, 20, svglvl, "11");
    addRect("12", 0, 462, 20, 20, svglvl, "12");
    addRect("13", 0, 441, 20, 20, svglvl, "13");
    addRect("14", 0, 420, 20, 20, svglvl, "14");
    addRect("15", 0, 399, 20, 20, svglvl, "15");
    addRect("16", 0, 378, 20, 20, svglvl, "16");
    addRect("17", 0, 357, 20, 20, svglvl, "17");
    addRect("18", 0, 336, 20, 20, svglvl, "18");
    addRect("19", 0, 315, 20, 20, svglvl, "19");
    addRect("20", 0, 294, 20, 20, svglvl, "20");
    addRect("21", 0, 273, 20, 20, svglvl, "21");   
    addRect("22", 0, 252, 20, 20, svglvl, "22");
    addRect("23", 0, 231, 20, 20, svglvl, "23");
    addRect("24", 0, 210, 20, 20, svglvl, "24");
    addRect("25", 0, 189, 20, 20, svglvl, "25");
    addRect("26", 0, 168, 20, 20, svglvl, "26");
    addRect("27", 0, 147, 20, 20, svglvl, "27");
    addRect("28", 0, 126, 20, 20, svglvl, "28");
    addRect("29", 0, 105, 20, 20, svglvl, "29");
    addRect("30", 0, 84, 20, 20, svglvl, "30");
    addRect("31", 0, 63, 20, 20, svglvl, "31");
    addRect("32", 0, 42, 20, 20, svglvl, "32");
    addRect("33", 0, 21, 20, 20, svglvl, "33");
    addRect("34", 0, 0, 20, 20, svglvl, "34");
    
}

function addMOI(){

    // OPTION A
    addRect2("AlbumA", 80, 20, 40, 40, svg1, "A", "setAutoStat('AlbumA')");
    addRect2("Key1", 50, 80, 40, 40, svg1, "K1", "setAutoStat('Key1')");
    addRect2("Key2", 110, 80, 40, 40, svg1, "K2", "setAutoStat('Key2')");

    const LL1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        LL1.setAttribute("x1", 100);
        LL1.setAttribute("y1", 60);
        LL1.setAttribute("x2", 100);
        LL1.setAttribute("y2", 100);
        LL1.setAttribute("stroke", "#ffffff");
        LL1.setAttribute("id", "line1");
    svg1.appendChild(LL1);

    const LL2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        LL2.setAttribute("x1", 90);
        LL2.setAttribute("y1", 100);
        LL2.setAttribute("x2", 110);
        LL2.setAttribute("y2", 100);
        LL2.setAttribute("stroke", "#ffffff");
        LL2.setAttribute("id", "line2");
    svg1.appendChild(LL2);

    // OPTION B
    addRect2("AlbumB", 80, 20, 40, 40, svg2, "A", "setAutoStat('AlbumB')");
    addRect2("Disc", 50, 80, 40, 40, svg2, "D", "setAutoStat('Disc')");

    const LL3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        LL3.setAttribute("x1", 95);
        LL3.setAttribute("y1", 60);
        LL3.setAttribute("x2", 95);
        LL3.setAttribute("y2", 100);
        LL3.setAttribute("stroke", "#ffffff");
        LL3.setAttribute("id", "line3");
    svg2.appendChild(LL3);

    const LL4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        LL4.setAttribute("x1", 95);
        LL4.setAttribute("y1", 100);
        LL4.setAttribute("x2", 90);
        LL4.setAttribute("y2", 100);
        LL4.setAttribute("stroke", "#ffffff");
        LL4.setAttribute("id", "line4");
    svg2.appendChild(LL4);

    addRect2("PW1", 110, 80, 40, 40, svg2, "PW1", "setAutoStat('PW1')");
    addRect2("PW2", 110, 130, 40, 40, svg2, "PW2", "setAutoStat('PW2')");
    addRect2("PW3", 110, 180, 40, 40, svg2, "PW3", "setAutoStat('PW3')");

    const GG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        GG.setAttribute("stroke", "#ffffff");
    svg2.appendChild(GG);

    const P0 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        P0.setAttribute("stroke-dasharray", "5,5");
        P0.setAttribute("d", "M105 60 l0 140");
    GG.appendChild(P0);

    const P1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        P1.setAttribute("stroke-dasharray", "5,5");
        P1.setAttribute("d", "M105 100 l5 0");
    GG.appendChild(P1);

    const P2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        P2.setAttribute("stroke-dasharray", "5,5");
        P2.setAttribute("d", "M105 150 l5 0");
    GG.appendChild(P2);

    const P3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        P3.setAttribute("stroke-dasharray", "5,5");
        P3.setAttribute("d", "M105 200 l5 0");
    GG.appendChild(P3);

}

function addControls(){

    addRect("BtnRot", 10, 10, 80, 30, svg, "ROTATION", "myRotation()");

    addRect2("Pearls", 10, 60, 80, 30, svg, "PEARLS", "setAutoStat('Pearls')");
    addRect2("Tokens", 10, 95, 80, 30, svg, "TOKENS", "setAutoStat('Tokens')");
    addRect2("Elytra", 10, 130, 80, 30, svg, "ELYTRA", "setAutoStat('Elytra')");
    addRect2("Potions", 10, 165, 80, 30, svg, "POTIONS", "setAutoStat('Potions')");
    addRect2("Fake", 10, 200, 80, 30, svg, "FAKE NEWS", "setAutoStat('Fake')");

    addRect2("Hail", 100, 60, 80, 30, svg, "HAIL MARY", "setAutoStat('Hail')");
    addRect2("HVAC", 100, 95, 80, 30, svg, "HVAC", "setAutoStat('HVAC')");
    addRect2("COMS", 100, 130, 80, 30, svg, "COMMS", "setAutoStat('COMS')");

    addRect2("P2P", 190, 60, 80, 30, svg, "P2P", "setAutoStat('P2P')");

}