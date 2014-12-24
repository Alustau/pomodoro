<?php
function pr($params, $exit = false) {
    echo '<pre>';
    print_r($params);
    echo '</pre>';
    if ($exit) {
        exit;
    }
}