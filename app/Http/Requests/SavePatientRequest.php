<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SavePatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
        'firstname'=>[
            "required",
            'string'
        ],
        'secondname'=>[
            "required",
            'string'
        ],
        'lastname'=>[
            'string'
        ],
        'identification'=>[
            'string'
        ],
        'gender'=>[
            "required",
            'string'
        ],
        'dob'=>[
            "required",
            'string'
        ],
        'address'=>[
            "required",
            'string'
        ],
        'village'=>[
            "required",
            'string'
        ],
        'town'=>[
            "required",
            'string'
        ],
        'municipality'=>[
            "required",
            'string'
        ],
        'telephone'=>[
            "required",
            'string'
        ],
        'email'=>[
            "required",
            'string'
        ],
        'district'=>[
            "required",
            'string'
        ],
        'occupation'=>[
            'string'
        ],
        'secondarycontact'=>[
            'string'
        ],
        'marital_status'=>[
            "required",
            'string'
        ]
        ];
    }
}
