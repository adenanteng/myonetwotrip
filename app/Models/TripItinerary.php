<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TripItinerary extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'trip_id',
        'name',
    ];

    protected $with = ['detail'];

    public function detail() {
        return $this->hasMany(TripItineraryDetail::class, 'itinerary_id', 'id');
    }
}
