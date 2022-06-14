<?php

use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home')
        ->withViewData(['description' => 'My App description']);
});

Route::get('/users', function () {
    return Inertia::render('Users', [
        'users' => User::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })
            ->paginate()
            ->withQueryString()
            ->through(fn($user) => [
                'id' => $user->id,
                'name' => $user->name,
            ]),
        'filters' => Request::only(['search'])
    ])
        ->withViewData(['description' => 'Users page description']);
});

Route::get('/settings', function () {
    return Inertia::render('Settings', [
        'time' => now()->toTimeString(),
    ])
        ->withViewData(['description' => 'Settings page description']);
});

Route::post('/logout', function () {
    return 'Logging the user out';
});
