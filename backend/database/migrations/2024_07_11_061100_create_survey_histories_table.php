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
        Schema::create('survey_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')
                ->constrained(table: 'employees')
                ->onDelete('cascade');
            $table->integer('metric_1_mark');
            $table->integer('metric_2_mark');
            $table->integer('metric_3_mark');
            $table->integer('metric_1_risk');
            $table->integer('metric_2_risk');
            $table->integer('metric_3_risk');
            $table->integer('risk_sum');
            $table->date('survey_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('survey_histories');
    }
};
