<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Trip;
use App\Models\TripItinerary;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
//                dd(Blog::all());
        return Inertia::render('Trip/Index', [
            'trip' => Trip::all(),
//            'category' => BlogCategory::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Trip/CreateEdit', [
            'selectCategory' => Trip::CATEGORY,
            'selectCity' => Trip::CITY,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
        ])->validateWithBag('storeInformation');

        $request['user_id'] = auth()->user()->id;
        $request['status'] = true;
        $request['slug'] = Str::slug($request['name'], '-');

        return Redirect::route('trip.edit', [
            'trip' => Trip::create($request->all())
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Trip $trip
     * @return Response
     */
    public function show(Trip $trip)
    {
        return Inertia::render('Trip/Show', [
            'trip' => $trip
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Trip $trip
     * @return Response
     */
    public function edit(Trip $trip)
    {

//        dd($blog);
        return Inertia::render('Trip/CreateEdit',
            [
                'trip' => $trip,
                'selectCategory' => Trip::CATEGORY,
                'selectCity' => Trip::CITY,
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Trip $trip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trip $trip)
    {
//        dd($request->all(), $trip->toArray());
//        Validator::make($request->toArray(), [
//            'name' => ['required', 'string', 'max:255'],
//        ])->validateWithBag('updateBlogInformation');

        $trip->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Trip $trip
     * @return RedirectResponse
     */
    public function destroy(Request $request)
    {
        $trip = Trip::find($request['id']);
        $trip->delete();

        return Redirect::route('trip.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function addHero(Request $request): void
    {
        Validator::make($request->toArray(), [
            'photo' => ['required'],
        ])->validateWithBag('storeBlogHero');

        $hero = Trip::find($request['id']);
        $hero->addMedia($request['photo'])->toMediaCollection();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return void
     */
    public function deleteHero($id): void
    {
//        dd($blogHero, $id);
        $media = Media::find($id);
//        dd($media);
        $model = Trip::find($media->model_id);
        $model->deleteMedia($media->id);
    }
}
