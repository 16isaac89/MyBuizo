<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Patient;
use App\Http\Requests\SavePatientRequest;
use App\Http\Requests\UpdatePatientRequest;

class PatientController extends Controller
{
    public function index(){
        $patients = Patient::all();
        return Inertia::render('Admin/patient/index', [
            'patients'=>$patients
        ]);
    }
    public function create(){
        return Inertia::render('Admin/patient/create');
    }
    public function store(SavePatientRequest $request){
        //dd($request->all());
        Patient::create($request->all());
        $patients = Patient::all();
        return Inertia::render('Admin/patient/index', [
            'patientss'=>$patients
        ]);
    }
    public function edit(Patient $patient){
        return Inertia::render('Admin/patient/edit', [
            'patient'=>$patient
        ]);
    }
    public function update(UpdatePatientRequest $request, Patient $patient){
        $patient->update([
            $request->all()
        ]);
        return Inertia::render('Admin/patient/edit', [
            'patient'=>$patient,
            'message'=>'Patient has been updated successfuly.'
        ]);
    }
}
