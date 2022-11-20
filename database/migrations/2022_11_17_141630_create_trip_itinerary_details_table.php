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
        Schema::create('trip_itinerary_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('itinerary_id');
            $table->string('desc');
            $table->timestamps();

            $table->foreign('itinerary_id')->on('trip_itineraries')->references('id')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip_itinerary_details');
    }
};
