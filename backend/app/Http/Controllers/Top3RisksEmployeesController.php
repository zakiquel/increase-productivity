<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\SurveyHistory;
use App\Models\Value;
use App\Models\ValueQuality;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class Top3RisksEmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $employees = Employee::where('company_id', $company->id)
            ->get();

        $employee_risk = array();

        foreach ($employees as $employee) {
            $metric_1_risk = SurveyHistory::where('employee_id', $employee->id)
            ->orderBy('survey_date', 'DESC')
            ->pluck('metric_1_risk')
            ->first();

            $metric_2_risk = SurveyHistory::where('employee_id', $employee->id)
            ->orderBy('survey_date', 'DESC')
            ->pluck('metric_1_risk')
            ->first();

            $metric_3_risk = SurveyHistory::where('employee_id', $employee->id)
            ->orderBy('survey_date', 'DESC')
            ->pluck('metric_1_risk')
            ->first();

            if ($metric_1_risk & $metric_2_risk & $metric_3_risk) {
                $values_id = ValueQuality::where('employee_id', $employee->id)->pluck('value_id')->unique();

                if (!$values_id) {
                    return response()->json(['error' => 'Your employee has no values'], 404);
                }

                $values = Value::where('company_id', $company->id)
                    ->whereIn('id', $values_id)->get();

                if (!$values) {
                    return response()->json(['error' => 'You have no values'], 404);
                }

                $value_date = ValueQuality::where('employee_id', $employee->id)
                        ->where('value_id', $values[0]->id)
                        ->latest('date')
                        ->pluck('date')
                        ->first();

                if (!$value_date) {
                    return response()->json(['error' => 'You have no statistic'], 404);
                }

                $sum_risks = ValueQuality::where('employee_id', $employee->id)
                    ->where('date', $value_date)
                    ->sum('risk');

                $risk_result = $sum_risks + $metric_1_risk + $metric_2_risk + $metric_3_risk;

                $employee_risk[$risk_result] = $employee->id;
            }
        }

        krsort($employee_risk);

        return response()->json($employee_risk);
    }
}
