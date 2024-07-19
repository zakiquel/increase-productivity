<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmployeeRequest extends FormRequest
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
            'imgSrc' => 'required|string|max:255',
            'salary' => 'required|numeric',
            'birth_date' => 'required|date',
            'position' => 'required|string|max:255',
            'status' => 'required|string|in:working,fired',
            'date_of_hiring' => 'required|date',
            'work_experience' => 'required|numeric|between:0,9999.99',
            'balance' => 'required|numeric',
            'company_id' => 'exists:companies,id',
        ];
    }

    protected function prepareForValidation()
    {
        $company = \App\Models\Company::where('user_id', auth()->id())->first();

        if ($company) {
            $this->merge([
                'company_id' => $company->id,
            ]);
        }
    }
}
