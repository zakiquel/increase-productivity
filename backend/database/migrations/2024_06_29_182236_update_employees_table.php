<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('phone_number');
            $table->string('imgSrc')->nullable();
            $table->string('status')->nullable();
            $table->integer('age_in_full_years')->nullable();
            $table->date('date_of_hiring')->nullable();
        });
        DB::statement('ALTER TABLE employees CHANGE date_of_birth birth_date DATE');

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('phone_number')->nullable();
            $table->dropColumn('imgSrc');
            $table->dropColumn('age_in_full_years');
            $table->dropColumn('date_of_hiring');
            $table->renameColumn('birth_date', 'date_of_birth');
        });
        DB::statement('ALTER TABLE employees CHANGE birth_date date_of_birth DATE');

    }
};
