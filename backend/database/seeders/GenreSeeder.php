<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    public function run()
    {
        $defaultGenres = ['食費', '交通費', '日用品', '趣味', '交際費', '家賃'];

        foreach ($defaultGenres as $genre) {
            Genre::create([
                'name' => $genre,
                'is_default' => true,
                'user_id' => null
            ]);
        }
    }
}
