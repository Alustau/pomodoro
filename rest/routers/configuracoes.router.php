<?php

$app->get('/configuracoes/:id', function ($id) use($app) {
    $configuracoes = new \models\Configuracoes();
    
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($configuracoes->getConfigUsuario($id));
});
