<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
use App\Models\Genre;

class FixedCost extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'genre_id',
        'name',
        'amount',
        'day_of_month',
        'interval_months',
        'start_date',
        'next_occurrence_date',
        'is_active',
        'memo'
    ];

    /**
     * Relations
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function genre(): BelongsTo
    {
        return $this->belongsTo(Genre::class);
    }
}
