<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UnitConversion extends Model
{
    use HasFactory;
    use SoftDeletes;
    public $table = 'units_conversion';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'product_id',
        'base_unit_id',
        'conversion',
        'to_unit_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
    public function base(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'base_unit_id', 'id');
    }
    public function tounit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'to_unit_id', 'id');
    }

    
}
