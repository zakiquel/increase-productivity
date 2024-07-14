<?php

namespace App\Http\Resources\SurveyHistory;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SurveyHistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'employee_id' => $this->employee_id,
            'metric_1_mark' => $this->metric_1_mark,
            'metric_2_mark' => $this->metric_2_mark,
            'metric_3_mark' => $this->metric_3_mark,
            'metric_1_risk' => $this->metric_1_risk,
            'metric_2_risk' => $this->metric_2_risk,
            'metric_3_risk' => $this->metric_3_risk,
            'risk_sum' => $this->risk_sum,
            'survey_date' => $this->survey_date,
        ];
    }
}
