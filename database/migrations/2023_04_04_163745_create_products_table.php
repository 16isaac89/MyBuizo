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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->integer('alert');
            $table->integer('unit_id');
            $table->integer('manage_stock');
            $table->integer('for_sale');
            $table->integer('product_type');
            $table->integer('applicable_tax');
            $table->integer('selling_price_type');
            $table->integer('product_category_id');
            $table->integer('product_brand_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
