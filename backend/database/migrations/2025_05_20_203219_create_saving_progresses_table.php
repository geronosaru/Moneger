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
        Schema::create('saving_progresses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('saving_goal_id')->constrained('saving_goals')->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('amount');
            $table->date('date');
            $table->string('memo',255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saving_progresses');
    }
};
