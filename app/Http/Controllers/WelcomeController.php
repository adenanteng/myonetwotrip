<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): Response
    {
        $carousel = [
            ['name' => 'Bali', 'img' => '/img/bali.jpg'],
            ['name' => 'Nusa Penida', 'img' => '/img/nusa-penida.jpg'],
            ['name' => 'Sindoro', 'img' => '/img/sindoro.jpg'],
            ['name' => 'Lembang', 'img' => '/img/lembang.jpg'],
        ];

//        dd($carousel);

        return Inertia::render('Welcome', ['carousel' => $carousel]);
    }
}
