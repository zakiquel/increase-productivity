<?php

namespace App\Http\Requests\SurveyHistory;

use Illuminate\Foundation\Http\FormRequest;

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
            'employee_id' => 'required|integer|exists:employees,id',
            'metric_1_mark' => 'required|integer|between:1,12',
            'metric_2_mark' => 'required|integer|between:1,10',
            'metric_3_mark' => 'required|integer|between:1,10',
            'survey_date' => 'required|date_format:Y-m-d',
            'metric_1_risk' => 'nullable|decimal',
            'metric_1_risk' => 'nullable|decimal',
            'metric_1_risk' => 'nullable|decimal',
            'risk_sum' => 'nullable|decimal',
        ];
    }
}
