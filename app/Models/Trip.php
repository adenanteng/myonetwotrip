<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Trip extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'slug',
        'name',
        'desc',
        'desc2',
        'desc3',
        'location',
        'price',
        'person_id',
        'category_id',
        'city_id',
        'duration_id',
        'status_id',
        'user_id',
    ];

    const OPENTRIP = 1;
    const HONEYMOON = 2;
    const CATEGORY = [
        self::OPENTRIP => 'Opentrip',
        self::HONEYMOON => 'Honeymoon',
    ];

    const ONE = 1;
    const TWO = 2;
    const THREE = 3;
    const FOUR = 4;
    const FIVE = 5;
    const SIX = 6;
    const SEVEN = 7;
    const EIGHT = 8;
    const NINE = 9;
    const TEN = 10;
    const TWENTY = 20;

    const DURATION = [
        self::ONE => '1 Hari',
        self::TWO => '2 Hari / 1 Malam',
        self::FOUR => '3 Hari / 2 Malam',
        self::SIX => '4 Hari / 3 Malam',
    ];

    const PERSON = [
        self::ONE => 'orang',
        self::TWO => '2 orang',
        self::FOUR => '4 orang',
        self::SIX => '6 orang',
        self::EIGHT => '8 orang',
        self::TEN => '10 0rang',
        self::TWENTY => '20 orang',
    ];

    const LAMPUNG = 1;
    const YOGYAKARTA = 2;
    const BALI = 3;
    const NTB = 4;
    const NTT = 5;
    const MALANG = 6;
    const SURABAYA = 7;
    const JAKARTA = 8;
    const CITY = [
        self::LAMPUNG => 'Lampung',
        self::YOGYAKARTA => 'Yogyakarta',
        self::BALI => 'Bali',
        self::NTB => 'Nusa Tenggara Barat',
        self::NTT => 'Nusa Tenggara Timur',
        self::MALANG => 'Malang',
        self::SURABAYA => 'Surabaya',
        self::JAKARTA => 'Jakarta',
    ];

    const ACTIVE = 1;
    const INACTIVE = 2;
    const STATUS = [
        self::ACTIVE => 'Aktif',
        self::INACTIVE => 'Tidak Aktif',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    protected $with = ['media', 'user', 'amenity','itinerary'];
    protected $appends = ['category', 'city', 'status', 'person', 'duration'];

    public function getStatusAttribute()
    {
        return self::STATUS[$this->status_id];
    }

    public function getCityAttribute()
    {
        return self::CITY[$this->city_id];
    }

    public function getCategoryAttribute()
    {
        return self::CATEGORY[$this->category_id];
    }

    public function getPersonAttribute()
    {
        return self::PERSON[$this->person_id];
    }

    public function getDurationAttribute()
    {
        return self::DURATION[$this->duration_id];
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function amenity() {
        return $this->hasMany(TripAmenity::class, 'trip_id', 'id');
    }

    public function itinerary() {
        return $this->hasMany(TripItinerary::class, 'trip_id', 'id');
    }
}
