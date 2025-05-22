<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fixed_costs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('genre_id')->constrained('genres')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('name',20);
            $table->integer('amount');
            $table->integer('day_of_month');
            $table->integer('interval_months');
            $table->date('start_date');
            $table->date('next_occurrence_date');
            $table->boolean('is_active')->default(true);
            $table->string('memo',255)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fixed_costs');
    }
};
