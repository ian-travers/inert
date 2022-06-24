<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Inertia\Inertia;

class ThreadsController extends Controller
{
    public function index()
    {
        return Inertia::render('Threads/Index', [
            'threads' => Thread::with('author')->take(30)->latest()->get()
        ]);
    }
}
