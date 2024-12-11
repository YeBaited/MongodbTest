<?php
    header('Access-Control-Allow-Origin: *');
    
    include "mongodbConnection.php";

    $listOfPost = array();

    $collection = $client->selectCollection("Activity", "Post");

    $result = $collection->find();

    foreach ($result as $data){
        array_push($listOfPost, $data);
    };

    echo json_encode($listOfPost);


    
?>