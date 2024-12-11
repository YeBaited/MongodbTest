<?php
    require __DIR__ . '/vendor/autoload.php';


    $uri = 'mongodb+srv://admin:josh1978@cluster0.6snzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    $options = [
        'tls' => true,
        
     ];

    $client = new MongoDB\Client($uri, $options);

    $db = $client->selectDatabase('Post');

    $test = $db->listCollections();

    $collection = $client->selectCollection('Activity', 'Post');

    $result = $collection->find([]);

    foreach($result as $data){
        echo $data['body'];
    };



    
?>