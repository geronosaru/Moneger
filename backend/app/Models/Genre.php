<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Transaction;
use App\Models\FixedCost;
use App\Models\User;

class Genre extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'user_id',
        'is_default'
    ];

    /**
     * Relations
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function fixed_costs(): HasMany
    {
        return $this->hasMany(FixedCost::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
