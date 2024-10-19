<?php

    require_once('config.php');
    $db_link = mysqli_connect(
        
        MYSQL_HOST, 
        MYSQL_USER, 
        MYSQL_PASSWORD, 
        MYSQL_DATABASE

    );

    $result2 = mysqli_query($db_link, "SELECT * FROM whimc_player_positions WHERE world='world' ORDER BY time DESC LIMIT 10");
    $j = -1;                  
    while($row = mysqli_fetch_array($result2))
    {
        $j = $j + 1;
        $d1[$j] = $row['time'];
        $d2[$j] = $row['username'];
        $d3[$j] = $row['x'];
        $d4[$j] = $row['y'];
        $d5[$j] = $row['z'];
    }
    echo json_encode(array($d1,$d2,$d3,$d4,$d5));

?>