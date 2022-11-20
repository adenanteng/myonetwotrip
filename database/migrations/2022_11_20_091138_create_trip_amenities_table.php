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
        Schema::create('trip_amenities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('trip_id');
            $table->string('name');
            $table->unsignedInteger('group_id')->default(1);
            $table->timestamps();

            $table->foreign('trip_id')->on('trips')->references('id')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip_amenities');
    }
};
