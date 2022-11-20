<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TripAmenity extends Model
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
        'group_id',
    ];

    const INCLUDE = 1;
    const EXCLUDE = 2;
    const GROUP = [
        self::INCLUDE => 'Include',
        self::EXCLUDE => 'Exclude',
    ];
}
