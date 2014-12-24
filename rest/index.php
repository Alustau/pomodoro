<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

require 'vendor/autoload.php';
require 'functions.php';

$config = require 'config.php';

$app = new \Slim\Slim($config['slim']);
$app->contentType('text/html; charset=utf-8');
        
$app->container->singleton('db', function () use ($config) {
    return new NotORM(
            new PDO($config['db']['dsn'],
                    $config['db']['username'],
                    $config['db']['password']
            )
    );
});


$app->get('/usuario(/:id)', function ($id = 1) use($app) {
    echo 'Esse é o usuarioss: '. $id;
});

$app->get('/procedimento/:id', function ($id) use($app) {
    $procedimentos = $app->db->procedimento()
            ->select('numero_procedimento')
            ->where('id', $id);
    
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($procedimentos);
});

$app->run();