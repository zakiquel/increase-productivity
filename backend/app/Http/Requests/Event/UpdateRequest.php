<?php

namespace App\Http\Requests\Event;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'event_date' => 'required|date',
            'format' => 'required|string',
            'imgSrc' => 'nullable|string',
            'reward' => 'required|integer',
            'description' => 'string|max:1001',
            'company_id' => 'exists:companies,id',
        ];
    }

    /**
     * Prepare the data for validation.
     */
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
