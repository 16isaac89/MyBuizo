<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;
    use SoftDeletes;
    public $table = 'stocks';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'product_id',
        'cost_price',
        'selling_price',
        'quantity',
        'expiry_date',
        'expires',
        'stocked_on',
        'bought_amount',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
