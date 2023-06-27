<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Unit;
use App\Models\UnitConversion;

class UnitController extends Controller
{
    public function index(){
$units = Unit::all();
return Inertia::render('Admin/units/index',[
    'units'=>$units,
]);
    }
    public function create(){
        $units = Unit::all();
        return Inertia::render('Admin/units/create',[
            'units'=>$units,
        ]);
}
public function store(){
//dd(request()->all());
    \DB::beginTransaction();
    try{
    $unit = Unit::create([
        'title'=>request()->title,
        'shortname'=>request()->shortname,
    ]);
    request()->ismultipleof === true && UnitConversion::create([
        'base_unit_id'=>request()->unit,
        'conversion'=>request()->multiplier,
        'to_unit_id'=>$unit->id,
    ]);
    \DB::commit();
    return to_route('units.index');
}catch(\Exception $ex){
    \DB::rollback();
    dd($ex);
    return back();
}
}
}
