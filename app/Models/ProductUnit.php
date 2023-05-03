<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductUnit extends Model
{
    use HasFactory;
    public $table = 'product_units';

   
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'actual_name',
        'short_name',
        'allow_decimal',
        'base_unit_id',
        'base_unit_multiplier',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

}
