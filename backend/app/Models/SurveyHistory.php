<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'metric_1_mark',
        'metric_2_mark',
        'metric_3_mark',
        'metric_1_risk',
        'metric_2_risk',
        'metric_3_risk',
        'risk_sum',
        'survey_date',
        'employee_id',
    ];

    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
}
