<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Gallery;
use App\Models\Page;
use App\Models\PageCta;
use App\Models\PageFeature;
use App\Models\PageFeatureDetail;
use App\Models\PageHero;
use App\Models\Trip;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function welcome(): Response
    {
        return Inertia::render('Landing/Welcome', [
            'trip' => Trip::all()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function trip(): Response
    {
//        dd(Trip::all());
        return Inertia::render('Landing/Trip', [
            'trip' => Trip::all()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function blog(): Response
    {
//        dd(Blog::all());
        return Inertia::render('Landing/Blog', [
            'blog' => Blog::all()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function gallery(): Response
    {
//        dd(Blog::all());
        return Inertia::render('Landing/Gallery', [
            'gallery' => Gallery::all()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function tripBali(): Response
    {
//        dd(Trip::all());
        return Inertia::render('Landing/Trip', [
            'title' => 'Bali',
            'desc' => 'Lorem ipsum',
            'img' => '/img/bali.jpg',
            'trip' => Trip::where('city_id', Trip::BALI)->get()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function tripYogyakarta(): Response
    {
//        dd(Trip::all());
        return Inertia::render('Landing/Trip', [
            'title' => 'Yogyakarta',
            'desc' => 'Lorem ipsum',
            'img' => '/img/yogyakarta.jpg',
            'trip' => Trip::where('city_id', Trip::YOGYAKARTA)->get()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function tripNtb(): Response
    {
//        dd(Trip::where('city_id', Trip::NTB)->get());
        return Inertia::render('Landing/Trip', [
            'title' => 'Nusa Tenggara Barat',
            'desc' => 'Lorem ipsum',
            'img' => '/img/nusa-penida.jpg',
            'trip' => Trip::where('city_id', Trip::NTB)->get()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function tripMalang(): Response
    {
//        dd(Trip::where('city_id', Trip::NTB)->get());
        return Inertia::render('Landing/Trip', [
            'title' => 'Malang',
            'desc' => 'Lorem ipsum',
            'img' => '/img/malang.jpg',
            'trip' => Trip::where('city_id', Trip::MALANG)->get()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function tripLampung(): Response
    {
//        dd(Trip::all());
        return Inertia::render('Landing/Trip', [
            'title' => 'Lampung',
            'desc' => 'Lorem ipsum',
            'img' => '/img/lampung.jpg',
            'trip' => Trip::where('city_id', Trip::LAMPUNG)->get()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function tripOpentrip(): Response
    {
//        dd(Trip::all());
        return Inertia::render('Landing/Trip', [
            'title' => 'Opentrip',
            'desc' => 'Lorem ipsum',
            'img' => '/img/nusa-penida.jpg',
            'trip' => Trip::where('category_id', Trip::TRIP)->get()
        ]);
    }

}
