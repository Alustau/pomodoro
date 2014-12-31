<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

require dirname(__DIR__) . '/rest/vendor/autoload.php';
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

$routers = glob('routers/*.router.php');

foreach ($routers as $router) {
    require $router;
}

$app->run();