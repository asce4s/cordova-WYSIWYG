<?php

return [
    /*
     |--------------------------------------------------------------------------
     | Laravel CORS
     |--------------------------------------------------------------------------
     |
     | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
     | to accept any value.
     |
     */
    'supportsCredentials' => false,
    'allowedOrigins' => ['*'],
    'allowedHeaders' => ['Origin, X-Requested-With, Content-Type, Accept'],
    'allowedMethods' => ['POST, GET, OPTIONS'],
    'exposedHeaders' => [],
    'maxAge' => 0,
];

