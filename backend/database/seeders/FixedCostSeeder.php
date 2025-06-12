<?php

namespace Database\Seeders;

use App\Models\FixedCost;
use App\Models\Genre;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FixedCostSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();

        FixedCost::create([
            'user_id' => $user->id,
            'genre_id' => 6,
            'name' => '家賃',
            'amount' => 80000,
            'day_of_month' => 1,
            'interval_months' => 1,
            'start_date' => now()->subMonths(3),
            'next_occurrence_date' => now()->startOfMonth()->addMonth(),
            'is_active' => true,
            'memo' => '月初めに引き落とし'
        ]);
    }
}
