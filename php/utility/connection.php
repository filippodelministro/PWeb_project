<?php
    $host = "localhost";
    $database = "pacman";
    $user = "root";
    $pass  = "";

    $connection = mysqli_connect($host, $user, $pass, $database);

    session_start();

    if (mysqli_connect_errno()) {
        die(mysqli_connect_error());
    }
?>
