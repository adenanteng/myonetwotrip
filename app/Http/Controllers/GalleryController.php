<?php

namespace App\Http\Controllers;

use App\Models\AppSetting;
use App\Models\Blog;
use App\Models\Gallery;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
//        dd(Gallery::all());
        return Inertia::render('Gallery/Index', [
            'gallery' => Gallery::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Gallery/CreateEdit', [

            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
            'photo' => ['required']
        ])->validateWithBag('storeInformation');

        $gall = Gallery::create($request->all());
        if ($request['photo'] != null) {
            $gall->addMedia($request['photo'])->toMediaCollection();
        }

        return Redirect::route('gallery.index', []);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Inertia\Response
     */
    public function edit(Gallery $gallery)
    {
//        dd($gallery);
        return Inertia::render('Gallery/CreateEdit',
            [
                'gallery' => $gallery,
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Gallery $gallery)
    {
//        dd($request->toArray(), $gallery->toArray());
        $gallery->update($request->all());

        return Redirect::route('gallery.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Gallery $gallery)
    {
//        dd($gallery);
        $gallery->delete();

        return Redirect::route('gallery.index');
    }
}
