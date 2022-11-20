<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->unsignedBigInteger('user_id');
            $table->string('name')->unique();
            $table->longText('desc');
            $table->longText('desc2')->nullable();
            $table->longText('desc3')->nullable();
            $table->string('location');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('city_id');
            $table->unsignedInteger('duration_id');
            $table->unsignedInteger('price');
            $table->unsignedInteger('person_id');
            $table->unsignedInteger('status_id');
            $table->timestamps();

            $table->foreign('user_id')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
};
