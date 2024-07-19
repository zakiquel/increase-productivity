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
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('company_id')
                ->constrained(table: 'companies', indexName: 'events_company_id')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('name');
            $table->date('event_date');
            $table->string('imgSrc')->nullable();
            $table->string('format');
            $table->integer('reward');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
