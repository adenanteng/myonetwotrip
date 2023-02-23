<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            [
                'slug' => 'beranda',
                'name' => 'Beranda',
                'desc' => 'lorem ipsum dolor sit amet',
                'is_default' => true,
                'user_id' => 1,
            ],
        ];
        foreach ($pages as $key => $value) {
            $user = Page::create($value);
//            $user->assignRole($value['user_type']);
        }
    }
}
