<?php

use craft\config\GeneralConfig;
use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return GeneralConfig::create()
    ->isSystemLive((bool)(App::env('IS_SYSTEM_LIVE') ?? false))
    ->enableTemplateCaching((bool)(App::env('TEMPLATE_CACHE') ?? false))
    ->devMode((bool)(App::env('DEV_MODE') ?? false))
    ->allowAdminChanges((bool)(App::env('ALLOW_ADMIN_CHANGES') ?? false))
    ->allowUpdates((bool)(App::env('ALLOW_UPDATES') ?? false))
    ->disallowRobots((bool)(App::env('DISALLOW_ROBOTS') ?? false))
    ->preloadSingles()
    ->defaultWeekStartDay(1)
    ->omitScriptNameInUrls()
    ->preventUserEnumeration()
    ->maxUploadFileSize('100M')
    ->errorTemplatePrefix("_errors/")
    ->allowedFileExtensions(['jpg', 'png', 'jpeg', 'gif', 'svg', 'mp4', 'wov', 'mp3', 'wav', 'pdf', 'json', 'csv'])
    ->cacheDuration(0)
    ->verificationCodeDuration(172800)
    ->generateTransformsBeforePageLoad(true)
    ->aliases([
        '@webroot' => dirname(__DIR__) . '/web',
        '@web' => getenv('SITE_URL') ?: null,
    ]);
