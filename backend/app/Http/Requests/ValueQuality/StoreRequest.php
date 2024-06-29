<?php

namespace App\Http\Requests\ValueQuality;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'value_id' => 'required|integer|exists:values,id',
            'employee_id' => 'required|integer|exists:employees,id',
            'quality1' => 'required|array',
            'quality1.id' => 'required|integer',
            'quality1.mark' => 'required|integer|between:1,10',

            'quality2' => 'nullable|array',
            'quality2.id' => 'nullable|integer',
            'quality2.mark' => 'nullable|integer|between:1,10',

            'quality3' => 'nullable|array',
            'quality3.id' => 'nullable|integer',
            'quality3.mark' => 'nullable|integer|between:1,10',

            'quality4' => 'nullable|array',
            'quality4.id' => 'nullable|integer',
            'quality4.mark' => 'nullable|integer|between:1,10',

            'quality5' => 'nullable|array',
            'quality5.id' => 'nullable|integer',
            'quality5.mark' => 'nullable|integer|between:1,10',
        ];
    }
}
