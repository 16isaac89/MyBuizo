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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('secondname');
            $table->string('lastname');
            $table->string('identification');
            $table->string('gender');
            $table->string('age');
            $table->date('dob');
        //address
        $table->string('address');
        $table->string('village');
        $table->string('town');
        $table->string('municipality');
        $table->string('telephone');
        $table->string('email');
        $table->string('district');
        $table->string('occupation');
        $table->string('secondarycontact');
        $table->string('marital_status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
