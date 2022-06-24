<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\UsersController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home')
        ->withViewData(['description' => 'My App description']);
})->name('home');

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth')->name('logout');

Route::controller(ThreadsController::class)
    ->prefix('threads')
    ->group(function () {
        Route::get('', 'index');
    });

Route::middleware('auth')->group(function () {
    Route::controller(UsersController::class)
        ->prefix('users')
        ->group(function () {
            Route::get('', 'index');
            Route::get('create', 'create')->can('create', User::class);
            Route::post('', 'store');
            Route::get('{user}', 'show');
        });

    Route::get('/settings', function () {
        return Inertia::render('Settings', [
            'time' => now()->toTimeString(),
        ])
            ->withViewData(['description' => 'Settings page description']);
    });
});
