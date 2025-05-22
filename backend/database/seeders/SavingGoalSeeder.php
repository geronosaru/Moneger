<?php

namespace Database\Seeders;

use App\Models\SavingGoal;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SavingGoalSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();

        SavingGoal::create([
            'user_id' => $user->id,
            'name' => '旅行資金',
            'target_amount' => 100000,
            'deadline' => now()->addMonths(6),
            'auto_monthly_amount' => 15000,
            'start_month' => now()->startOfMonth(),
            'is_active' => true,
        ]);
    }
}
