<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): \Illuminate\Http\RedirectResponse
    {
//        dd($carousel);

        $default = Page::where('is_default', true)->first();

        if($default) {
            return Redirect::route('page.show', [
                'page' => $default
            ]);
        } else {
            return Redirect::route('blank');
        }


    }

    public function blank() {
        return Inertia::render('Welcome');
    }
}
