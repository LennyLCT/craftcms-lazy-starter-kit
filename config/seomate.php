<?php

use craft\helpers\App;

return [
    'siteName' => [
        'default' => App::env('SEO_NAME'),
    ],
    'defaultProfile' => 'default',
    'fieldProfiles' => [
        'default' => [
            'title' => ['seo.seoTitle', 'headline', 'title'],
            'description' => ['seo.seoDescription'],
            'image' => ['seo.seoImage']
        ],
    ],
    'sitemapEnabled' => true,
    'outputAlternate' => false,
    'sitemapConfig' => [
        'elements' => [
            'home' => ['changefreq' => 'weekly', 'priority' => 0.5],
            'pages' => [
                'elementType' => \craft\elements\Entry::class,
                'criteria' => ['section' => 'pages'],
                'params' => ['changefreq' => 'weekly', 'priority' => 1],
            ],
            'blog' => [
                'elementType' => \craft\elements\Entry::class,
                'criteria' => ['section' => 'blog'],
                'params' => ['changefreq' => 'weekly', 'priority' => 1],
            ],
        ],
    ],
];
