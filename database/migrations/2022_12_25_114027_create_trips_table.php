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
            $table->string('slug');
            $table->string('name');
            $table->longText('desc')->nullable();
            $table->longText('content')->nullable();
            $table->longText('itinerary')->nullable();
            $table->longText('include')->nullable();
            $table->longText('exclude')->nullable();
            $table->longText('faq')->nullable();
            $table->string('location');
            $table->unsignedInteger('city_id');
            $table->unsignedInteger('price');
            $table->unsignedInteger('category_id');
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('user_id');
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
