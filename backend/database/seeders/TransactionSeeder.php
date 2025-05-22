<?php

namespace Database\Seeders;

use App\Models\Genre;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();
        $genre = Genre::where('is_default', true)->first();

        Transaction::create([
            'user_id' => $user->id,
            'genre_id' => $genre->id,
            'type' => 'expense',
            'amount' => 2500,
            'date' => now()->subDays(1),
            'memo' => 'スーパーで買い物'
        ]);
    }
}
