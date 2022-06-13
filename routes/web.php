<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home')
        ->withViewData(['description' => 'My App description']);
});

Route::get('/users', function () {
    return Inertia::render('Users', [
        'time' => now()->toTimeString(),
    ])
        ->withViewData(['description' => 'Users page description']);
});

Route::get('/settings', function () {
    return Inertia::render('Settings')
        ->withViewData(['description' => 'Settings page description']);
});

Route::post('/logout', function () {
    return'Logging the user out';
});
