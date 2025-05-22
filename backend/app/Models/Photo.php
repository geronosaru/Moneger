<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Transaction;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_id',
        'image_path'
    ];

    /**
     * Relation
     */
    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }
}
