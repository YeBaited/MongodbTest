<?php
    require __DIR__ . '/vendor/autoload.php';


    $uri = 'mongodb+srv://admin:josh1978@cluster0.6snzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    $options = [
        'tls' => true,
        'tlsCAFile' => '/DigiCertTLSECCP384RootG5.crt.pem'
     ];

    $client = new MongoDB\Client($uri, $options);

    $collection = $client->selectCollection("Post", "Post1");

    echo $collection;
?>