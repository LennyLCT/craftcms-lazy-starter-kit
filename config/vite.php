<?php

use craft\helpers\App;

return [
    'checkDevServer' => true,
    'devServerInternal' => 'http://localhost:3000',
    'devServerPublic' => App::env('SITE_URL') . ':3000',
    'manifestPath' => App::env('CRAFT_WEB_ROOT') . '/dist/.vite/manifest.json',
    'serverPublic' => App::env('SITE_URL') . '/dist/',
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
];
