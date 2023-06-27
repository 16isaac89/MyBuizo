<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory,SoftDeletes;
    protected $table = 'patients';
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'firstname',
        'secondname',
        'lastname',
        'identification',
        'gender',
        'dob',
        //address
        'address',
        'village',
        'town',
        'municipality',
        'telephone',
        'email',
        'district',
        'occupation',
        'secondarycontact',
        'marital_status'

    ];
}
