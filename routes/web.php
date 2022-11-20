<?php

use App\Http\Controllers\TripController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome');
//});

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->name('dashboard');

    Route::resource('trip', TripController::class)->names('trip');

    Route::post('trip/add-photo', [TripController::class, 'addPhoto'])->name('trip.addPhoto');
    Route::delete('trip/delete-photo/{trip}/{index}', [TripController::class, 'deletePhoto'])->name('trip.deletePhoto');

    Route::post('trip/add-itinerary', [TripController::class, 'addItinerary'])->name('trip.addItinerary');
    Route::post('trip/add-itinerary-detail', [TripController::class, 'addItineraryDetail'])->name('trip.addItineraryDetail');

    Route::post('trip/add-amenity', [TripController::class, 'addAmenity'])->name('trip.addAmenity');
});
