<?php

return [
    'slim' => [
        'debug' => true,
        'mode' => 'development',
        'templates.path' => './templates',
    ],
    'db' => [
        'dsn'      => 'mysql:dbname=pomodoro;host=127.0.0.1',
        'username' => 'root',
        'password' => ''
    ],
];