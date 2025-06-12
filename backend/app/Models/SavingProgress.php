<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\SavingGoal;

class SavingProgress extends Model
{
    use HasFactory;

    protected $table = 'saving_progresses';
    protected $fillable = [
        'saving_goal_id',
        'amount',
        'date',
        'memo'
    ];

    /**
     * Relation
     */
    public function saving_goal(): BelongsTo
    {
        return $this->belongsTo(SavingGoal::class);
    }
}
