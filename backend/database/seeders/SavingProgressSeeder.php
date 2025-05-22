<?php

namespace Database\Seeders;

use App\Models\SavingGoal;
use App\Models\SavingProgress;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SavingProgressSeeder extends Seeder
{
    public function run()
    {
        $goal = SavingGoal::first();

        SavingProgress::create([
            'saving_goal_id' => $goal->id,
            'amount' => 15000,
            'date' => now()->startOfMonth(),
            'memo' => '今月の貯金'
        ]);
    }
}
