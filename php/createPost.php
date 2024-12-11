<?php
    header("Access-Control-Allow-Origin: *");

    include "mongodbConnection.php";

    $rawData = file_get_contents("php://input");
    $decodedData = json_decode($rawData, true);

    $t = $decodedData["body"];
    $lock = false;

    if ($lock === false){
        $lock = true;
        $t = $decodedData["body"];
    }

    
    $collection = $client->selectCollection("Activity", "Post");

    $result = $collection->insertOne([
        'date' => date("Y/m/d"),
        'epochDate' => time(),
        'name' => $decodedData["name"],
        'title' => $decodedData["title"],
        'body' => $decodedData["body"],
    ])


?>