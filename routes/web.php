<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Hello', [
        'name' => 'Jeffrey Way',
        'frameworks' => ['Laravel', 'Inertia', 'Vue'],
    ]);
});
