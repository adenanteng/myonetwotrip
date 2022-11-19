<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use App\Models\TripItinerary;
use App\Models\TripItineraryDetail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $trip = Trip::all();

        return Inertia::render('Trip/Index', ['trip' => $trip]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $selectCategory = Trip::CATEGORY;
        $selectCity = Trip::CITY;

        return Inertia::render('Trip/CreateEdit',
            [
                'selectCity' => $selectCity,
                'selectCategory' => $selectCategory
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     * @throws ValidationException
     */
    public function store(Request $request)
    {

        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
        ])->validateWithBag('storeTripInformation');

        $request['user_id'] = auth()->user()->id;
        $request['status_id'] = Trip::ACTIVE;
        $request['slug'] = Str::slug($request['name'], '-');

//        dd($request->all());
        $trip = Trip::create($request->all());

        return Redirect::route('trip.edit', ['trip' => $trip]);

    }

    /**
     * Display the specified resource.
     *
     * @param Trip $trip
     * @return \Inertia\Response
     */
    public function show(Trip $trip)
    {
//        dd($trip);
        return Inertia::render('Trip/Show', ['trip' => $trip]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Trip $trip
     * @return \Inertia\Response
     */
    public function edit(Trip $trip)
    {
//        dd($trip);
        $selectCategory = Trip::CATEGORY;
        $selectCity = Trip::CITY;

        $selectItinerary = TripItinerary::whereTripId($trip->id)->get()->pluck('name', 'id');
//        dd($selectItinerary);

        return Inertia::render('Trip/CreateEdit',
            [
                'trip' => $trip,
                'selectCity' => $selectCity,
                'selectCategory' => $selectCategory,
                'selectItinerary' => $selectItinerary,
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Trip $trip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trip $trip)
    {
//        dd($request->toArray(), $trip);

        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
        ])->validateWithBag('storeTripInformation');

//        $request['status_id'] = Trip::ACTIVE;

        $trip->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Trip $trip
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trip $trip)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function addPhoto(Request $request)
    {
        $trip = Trip::find($request['trip_id']);
        $trip->addMedia($request['photo'])->toMediaCollection();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $trip
     * @param $index
     * @return void
     */
    public function deletePhoto($trip, $index)
    {
//        dd($trip, $index);
        $trip = Trip::find($trip);
        $trip->media[$index]->delete();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function addItinerary(Request $request)
    {
        TripItinerary::create($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function addItineraryDetail(Request $request)
    {
//        dd($request->all());
        TripItineraryDetail::create($request->all());
    }
}
