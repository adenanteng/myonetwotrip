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
        'location',
        'price',
        'category_id',
        'city_id',
        'status_id',
        'user_id',
    ];

    const TRIP = 1;
    const HONEYMOON = 2;
    const CATEGORY = [
        self::TRIP => 'Paket Wisata',
        self::HONEYMOON => 'Bulan Madu',
    ];

    const SELECT_CATEGORY = [
        [ 'id' => self::TRIP, 'name' => 'Paket Wisata' ],
        [ 'id' => self::HONEYMOON, 'name' => 'Bulan Madu' ],
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
    const SELECT_CITY = [
        [ 'id' => self::LAMPUNG, 'name' => 'Lampung' ],
        [ 'id' => self::YOGYAKARTA, 'name' => 'Yogyakarta' ],
        [ 'id' => self::BALI, 'name' => 'Bali' ],
        [ 'id' => self::NTB, 'name' => 'Nusa Tenggara Barat' ],
        [ 'id' => self::NTT, 'name' => 'Nusa Tenggara Timur' ],
        [ 'id' => self::MALANG, 'name' => 'Malang' ],
        [ 'id' => self::SURABAYA, 'name' => 'Surabaya' ],
        [ 'id' => self::JAKARTA, 'name' => 'Jakarta' ],
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

    protected $with = ['media', 'user', 'itinerary'];
    protected $appends = ['category', 'city', 'status'];

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

    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function itinerary() {
        return $this->hasMany(TripItinerary::class, 'trip_id', 'id');
    }
}
