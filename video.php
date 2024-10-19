<HTML>

    <HEAD>
        <TITLE>[MrP] Sepia Tower 3D (v204) VIDEO WORKBENCH</TITLE>

        <LINK REL="STYLESHEET" HREF="myStyles.css">

        <script type="importmap">
        {
            "imports": {
                "three": "./three.module.js",
                "three/addons/": "./addons/"
            }
        }
        </script>

    </HEAD>

    <BODY onLoad="init();">

        <TABLE WIDTH="1600PX" HEIGHT="900PX" CELLSPACING="0" CELLPADDING="0" BORDER="1">
            <COLGROUP><COL WIDTH="480PX"><COL WIDTH="567PX"><COL WIDTH="20PX"><COL WIDTH="533PX"></COLGROUP>

            <TR HEIGHT="570PX">
                <TD COLSPAN="2">TOP LEFT (MAIN P.O.V.)</TD>
                <TD ROWSPAN="2"><SVG WIDTH="20PX" HEIGHT="734PX" ID="levels"></SVG></TD>
                <TD ROWSPAN="2">
                    <!-- 3D MAP //-->
                    <CANVAS ID="myCanvas" HEIGHT="900PX" WIDTH="533PX" data-engine="three.js r150" STYLE="outline:none; border:none;">
                        I'm sorry but it appears that your browser does not support canvas elements. :/
                    </CANVAS>
                </TD>
            </TR>

            <TR HEIGHT="330PX">
                <TD>

                    <!-- BOTTOM-LEFT (M.O.I.) //-->
                    <TABLE WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0" BORDER="0">
                        <COLGROUP><COL WIDTH="50%"><COL WIDTH="50%"></COLGROUP>

                        <TR HEIGHT="20PX"><TD COLSPAN="2"></TD></TR>

                        <TR><TD COLSPAN="2"><P CLASS="section">MISSION OBJECTIVES INDICATOR</P></TD></TR>

                        <TR>
                            <TD>
                                <P>OPTION A</P>
                                <P><SVG WIDTH="200PX" HEIGHT="240PX" ID="mySVG1"></SVG></P>
                            </TD>
                            <TD>
                                <P>OPTION B</P>
                                <P><SVG WIDTH="200PX" HEIGHT="240PX" ID="mySVG2"></SVG></P>                                
                            </TD>
                        </TR>
                    </TABLE>

                </TD>
                <TD>
                    <!-- BOTTOM CENTER (SECONDARY P.O.V.) //-->
                    <P><?php
				
                        require_once('config.php');

                        $db_link = mysqli_connect(
                            
                            MYSQL_HOST, 
                            MYSQL_USER, 
                            MYSQL_PASSWORD, 
                            MYSQL_DATABASE
                        
                        );

                        if ( $db_link )
                        {

                            print ("Connection to database established at " . date('d.m.Y H:i:s') . ".");
                            /* print_r( $db_link); */

                        }
                        else
                        {

                            die('Cannot establish connection to database :/ ' . mysqli_error());

                        }

                    ?></P>
                    <P>
                        <BUTTON onClick="setStat('AlbumA','pursuing')">A:pur</BUTTON> _ <BUTTON onClick="setStat('Key1','pursuing')">K1:pur</BUTTON> _ <BUTTON onClick="setStat('Key2','pursuing')">K2:pur</BUTTON>
                        <BR><BUTTON onClick="setStat('Key1','obtained')">K1:obt</BUTTON> _ <BUTTON onClick="setStat('Key2','obtained')">K2:obt</BUTTON> _ <BUTTON onClick="setStat('AlbumA','elligible')">A:ell</BUTTON>
                        <BR><BUTTON onClick="setStat('AlbumA','obtained')">A:obt</BUTTON>                                
                    </P>
                    <P>
                        <BUTTON onClick="setStat('AlbumB','pursuing')">A:pur</BUTTON> _ <BUTTON onClick="setStat('Disc','pursuing')">D:pur</BUTTON>
                        <BR><BUTTON onClick="setStat('Disc','obtained')">D:obt</BUTTON> _ <BUTTON onClick="setStat('AlbumB','elligible')">A:ell</BUTTON>
                        <BR><BUTTON onClick="setStat('AlbumB','obtained')">A:obt</BUTTON>
                        <BR><BUTTON onClick="setStat('PW1','pursuing')">PW1:pur</BUTTON> _ <BUTTON onClick="setStat('PW2','pursuing')">PW2:pur</BUTTON> _ <BUTTON onClick="setStat('PW3','pursuing')">PW3:pur</BUTTON>
                        <BR><BUTTON onClick="setStat('PW1','obtained')">PW1:obt</BUTTON> _ <BUTTON onClick="setStat('PW2','obtained')">PW2:obt</BUTTON> _ <BUTTON onClick="setStat('PW3','obtained')">PW3:obt</BUTTON>
                    </P>
                </TD>
            </TR>

        </TABLE>

        <SCRIPT type="text/javascript" src="myAux.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="myFunctions.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="myTests.js"></SCRIPT>  
        <SCRIPT type="text/javascript" src="myControls.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="displayRecording.js"></SCRIPT>      
        <SCRIPT type="text/javascript" src="jquery.min.js"></SCRIPT>

        <SCRIPT TYPE="module">

            console.log("Importing THREE, OrbitControls, MapControls from libraries.");

            import * as THREE from 'three';
            window.THREE = THREE;

            import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
            window.OrbitControls = OrbitControls;

            import { MapControls } from 'three/addons/controls/MapControls.js';
            window.MapControls = MapControls;

        </SCRIPT>

        <SCRIPT TYPE="text/javascript">

            var canvas, scene, camera, orbit, renderer;
            var axes, grid;
            var raycaster, pointer; // used for highlighting objects when touched by the mouse pointer

            var floorsArray = [];
            var wireframesArray = [];
            var logoGroup = null;

            let telemetry = null;

            let myPlayers = [];
            let tlm = null;
            let voidIndex = null;
            let voidTime = null;

            var svg = document.getElementById("mySVG");
            var svg1 = document.getElementById("mySVG1");
            var svg2 = document.getElementById("mySVG2");
            var svglvl = document.getElementById("levels");

            function init(){

                console.log("init(): Setting up scene, camera, orbit controls, and renderer.");

                canvas = document.getElementById("myCanvas");
                scene = new THREE.Scene();

                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1,  5000000);
                camera.position.set(9257, 460, -190);
                camera.up.set(0,0,-1); // we need this to align our THREE coordinate system with Minecraft's COS (as it uses N=-z and S=+z for some reason)

                orbit = new MapControls(camera, canvas);
                orbit.enableDamping = true;
                orbit.dampingFactor = 0.05;
                orbit.screenSpacePanning = false;
                orbit.minDistance = .1;
                orbit.maxDistance = 16384;
                orbit.maxPolarAngle = (Math.PI / 2) - (Math.PI / 360);
                orbit.zoomSpeed = 1;
                orbit.rotateSpeed = 1;
                orbit.autoRotate = true;
                orbit.autoRotateSpeed = .25;
                orbit.target = new THREE.Vector3(9346.5, 772.5, -187.5);

                renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    canvas,
                    logarithmicDepthBuffer: true,
                });
                renderer.setPixelRatio(window.devicePixelRatio);
                // renderer.setSize(window.innerWidth, window.innerHeight);
                raycaster = new THREE.Raycaster(); // RAYCASTING enables detecting mouse pointer moving over 3D objects
                pointer = new THREE.Vector2();
                renderer.render(scene, camera);

                // gets relative mouse pointer coordinates, goes together with the raycaster
                window.addEventListener('pointermove', onPointerMove); // note that onPointerMove is a function defined in myAux.js

                Main();

            }

            async function render(){

                // this asynchronous function updates the scene
                // all updates to 3D rendered objects must be put in here

                orbit.update();

                // this code bit rescales the canvas when the window resized
                // THINKING ABOUT DROPPING THIS
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();

                renderer.render(scene, camera);
                requestAnimationFrame(render);

            }

            function Main(){

                console.log("Main(): Bringing everything to life.");

                fiatLux();
                addGaugeElements();
                addTower();

                requestAnimationFrame(render);

                getTelemetry();
                convertTelemetry();
                addPlayers();
                groupTelemetry();

                // addMissionObjectivesTracker();
                addMOI();
                addLevels();

                addRoom("ReadyRoom", 9359, 55, 609, 9374, 61, 632, "#a0a0a0");
                // outpPos(1727901982);

            }

            function getTelemetry(){

                console.log("[index.php] getTelemetry(): Fetching data from NITRADO database.");

                telemetry = <?php

                    $result = mysqli_query($db_link, "SELECT * FROM TH20241015 WHERE world='world'");
                    $i = -1;
                    
                    while($row = mysqli_fetch_array($result))
                    {
                        $i = $i + 1;
                        $c1[$i] = $row['time'];
                        $c2[$i] = $row['username'];
                        $c3[$i] = $row['x'];
                        $c4[$i] = $row['y'];
                        $c5[$i] = $row['z'];
                    }
                    echo json_encode(array($c1,$c2,$c3,$c4,$c5));			

                ?>;   

            }

            function outpPos(timeindex){

                voidTime = timeindex;
                let localtime = new Date(timeindex*1000);
                console.log("[index.php] outpPos(): Called with time index " + timeindex + ", which corresponds to " + localtime + ".");

                let startindex = null;
                for (let i = 0; i < tlm.length; i++){ if (tlm[i][0] == timeindex){ startindex = i; break; } }
                if (startindex != null){ console.log("outpPos(): Found time index provided in the telemetry data array tlm[] at index " + startindex + "."); }

                voidIndex = startindex;
                outpMainLoop(voidIndex);

            }

        </SCRIPT>

    </BODY>

</HTML>