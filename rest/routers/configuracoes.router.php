<?php
$configuracoes = new \models\Configuracoes();

$app->get('/configuracoes/:id', function ($id) use($app, $configuracoes) {
    
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($configuracoes->getConfigUsuario($id));
});

$app->post('/configuracoes', function () use($app, $configuracoes) {
    $app->response()->header("Content-Type", "application/json");
    $config = (array)  json_decode($app->request()->getBody());
    echo json_encode($configuracoes->save($config));
});
