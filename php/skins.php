<?php header("Content-type: text/css");
session_start();
require_once "./utility/pacmanDbManager.php";
require_once "./utility/sessionUtil.php";
include "./handle_store.php";

global $PacmanDB;
$username = $_SESSION['username'];
$userId = $_SESSION['userId'];

//get user data: for rewiew box
$skins = getUserSkins($userId);

switch ($skins['pacman']) {
    case 2: $pacman = "rgb(203, 0,  0);"; break;            //dark red
    case 3: $pacman = "rgb(0, 255,  0);"; break;            //green
    case 4: $pacman = "rgb(255, 0,  239);"; break;          //fuscia
    case 5: $pacman = "rgb(255, 255,  255);"; break;        //white
    case 1:
    default: $pacman = "rgb(255, 200, 0);"; break;
}

switch ($skins['map']) {
    case 2:                                         // desert
        $map = "rgb(154, 130, 92)";
        $wall = "rgb(231, 199, 135)";
        $spawn = "rgb(104, 42, 12)";
        $tunnel = "rgb(243, 238, 224)";
        break;
    case 3:                                         // artic
        $map = "rgb(160, 210, 230)";
        $wall = "rgb(92, 122, 129)";
        $spawn = "rgb(169, 183, 198)";
        $tunnel = "rgb(242, 242, 247)";
        break;
    case 4:                                         // Mars
        $map = "rgb(225, 96, 15)";
        $wall = "rgb(152, 51, 0)";
        $spawn = "rgb(250, 128, 114)";
        $tunnel = "rgb(255, 228, 196)";
        break;
    case 5:                                         //B-W
        $map = "rgb(0, 0, 0)";
        $wall = "rgb(150, 150, 150)";
        $spawn = "rgb(80, 80, 80)";
        $tunnel = "rgb(230, 230, 230)";
        break;
    case 6:                                         //lollipop
        $map = "rgb(255, 153, 153)";
        $wall = "rgb(153, 51, 255)";
        $spawn = "rgb(102, 178, 255)";
        $tunnel = "rgb(255, 255, 102)";
        break;
    case 1:                                         // default
    default:
        $map = "rgb(0, 0, 0);";
        $wall = "rgb(0, 0, 105);";
        $spawn = "rgb(0, 0, 67)";
        $tunnel = "white";
        break;
}

switch ($skins['ghosts']) {
    case 2:                                        //grey
        $ghost1 = "rgb(100, 100, 100)";
        $ghost2 = "rgb(150, 150, 150);";
        $ghost3 = "rgb(200, 200, 200);";
        $ghost4 = "rgb(250, 250, 250);";
        break;
    case 3:                                         //aliens          
        $ghost1 = "rgb(50, 200, 50)";
        $ghost2 = "rgb(200, 200, 50);";
        $ghost3 = "rgb(50, 150, 200);";
        $ghost4 = "rgb(200, 50, 50);";
        break;
    case 4:                                        //vintage
        $ghost1 = "rgb(215, 163, 126)";
        $ghost2 = "rgb(194, 118, 108)";
        $ghost3 = "rgb(150, 92, 75)";
        $ghost4 = "rgb(107, 71, 63)";
        break;
    case 5:                                         //daltonic
        $ghost1 = "rgb(0, 0, 255)";
        $ghost2 = "rgb(255, 0, 0)";
        $ghost3 = "rgb(0, 255, 0)";
        $ghost4 = "rgb(255, 255, 0)";
        break;
    case 1:                                         // default
    default:
        $ghost1 = "blue;";
        $ghost2 = "red;";
        $ghost3 = "orange;";
        $ghost4 = "pink;";
        break;
}



?>

#pacman{
    background-color: <?=$pacman?>
}

.map{
    background-color: <?=$map?>
}
.wall{
    background-color: <?=$wall?>
}
.spawn{
    background-color: <?=$spawn?>
}
.tunnel{
    background-color: <?=$tunnel?>
}


.ghost1{
    background-color: <?=$ghost1?>
}
.ghost2{
    background-color: <?=$ghost2?>
}
.ghost3{
    background-color: <?=$ghost3?>
}
.ghost4{
    background-color: <?=$ghost4?>
}