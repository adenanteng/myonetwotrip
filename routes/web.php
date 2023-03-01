<?php

use App\Http\Controllers\AppSettingController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\TripController;
use App\Http\Controllers\UserController;
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

Route::get('/', [LandingController::class, 'welcome'])->name('landing.welcome');
Route::get('/destinasi', [LandingController::class, 'trip'])->name('landing.destination');
Route::get('/destinasi/{trip}', [TripController::class, 'show'])->name('trip.show');

Route::get('/opentrip', [LandingController::class, 'tripOpentrip'])->name('landing.opentrip');

Route::get('/kota/bali', [LandingController::class, 'tripBali'])->name('landing.bali');
Route::get('/kota/yogyakarta', [LandingController::class, 'tripYogyakarta'])->name('landing.yogyakarta');
Route::get('/kota/nusa-tenggara-barat', [LandingController::class, 'tripNtb'])->name('landing.ntb');
Route::get('/kota/malang', [LandingController::class, 'tripMalang'])->name('landing.malang');
Route::get('/kota/lampung', [LandingController::class, 'tripLampung'])->name('landing.lampung');

Route::get('/artikel', [LandingController::class, 'blog'])->name('landing.blog');
Route::get('/artikel/{blog}', [BlogController::class, 'show'])->name('blog.show');

Route::get('/blank', [WelcomeController::class, 'blank'])->name('blank');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->name('dashboard');

//    Route::resource('/page', PagesController::class)->names('page');
//    Route::get('/{id}', [PagesController::class, 'show'])->name('page.show');
//    Route::get('page/default/{id}', [PagesController::class, 'isDefault'])->name('page.default');

    Route::resource('/trip', TripController::class)->names('trip')->except('show');
//    Route::resource('/trip-itinerary', TripController::class)->names('trip')->except('show');
    Route::post('trip/add-hero', [TripController::class, 'addHero'])->name('trip.addHero');
    Route::delete('trip/delete-hero/{trip}/{id}', [TripController::class, 'deleteHero'])->name('trip.deleteHero');

    Route::resource('/blog', BlogController::class)->names('blog')->except('show');
    Route::post('blog/add-hero', [BlogController::class, 'addHero'])->name('blog.addHero');
    Route::delete('blog/delete-hero/{blog}/{id}', [BlogController::class, 'deleteHero'])->name('blog.deleteHero');

    Route::post('blog/add-blog-category', [BlogController::class, 'addCategory'])->name('blog.addCategory');
    Route::put('page/edit-blog-category/{category}', [BlogController::class, 'editCategory'])->name('blog.editCategory');
    Route::delete('blog/delete-blog-category/{id}', [BlogController::class, 'deleteCategory'])->name('blog.deleteCategory');

    Route::resource('/user', UserController::class)->names('user');
    Route::post('/user/reset-password/{user}', [UserController::class, 'resetPassword'])->name('user.passwordReset');

    Route::resource('/setting', AppSettingController::class)->names('setting');
});
