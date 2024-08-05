<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Metric;
use App\Models\SurveyHistory;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class MetricsGraphicsController extends Controller
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

        $result = array();

        $employees_id = Employee::where('company_id', $company->id)->pluck('id');

        $survey_dates = SurveyHistory::where('employee_id', $employees_id[0])
            ->latest('survey_date')
            ->limit(4)
            ->pluck('survey_date');

        $dates = array();

        $j = 0;
        foreach ($survey_dates as $date) {
            $dates[$j] = $date;
            $j++;
        }

        $metrics_names = Metric::limit(3)->pluck('name');

        $dates = array_reverse($dates);

        $result['labels'] = $dates;

        $marks = array();
        $marks[0] = array();
        $marks[1] = array();
        $marks[2] = array();

        for ($i = 0; $i < 3; $i++) {
            foreach ($dates as $date) {
                array_push($marks[$i], SurveyHistory::where('survey_date', $date)
                    ->whereIn('employee_id', $employees_id)
                    ->avg('metric_'.($i+1).'_mark')
                );
            }

        }

        $result['datasets'] = (array) [
            '0' => [
                'label' => $metrics_names[0],
                'data' => $marks[0],
            ],
            '1' => [
                'label' => $metrics_names[1],
                'data' => $marks[1],
            ],
            '2' => [
                'label' => $metrics_names[2],
                'data' => $marks[2],
            ],
        ];

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $result = array();

        $survey_dates = SurveyHistory::where('employee_id', $id)
            ->latest('survey_date')
            ->limit(4)
            ->pluck('survey_date');

        $dates = array();

        $j = 0;
        foreach ($survey_dates as $date) {
            $dates[$j] = $date;
            $j++;
        }

        $metrics_names = Metric::limit(3)->pluck('name');

        $result['labels'] = array_reverse($dates);

        $marks = array();

        for ($i = 0; $i < 3; $i++) {
            $marks[$i] = SurveyHistory::whereIn('survey_date', $dates)
                ->where('employee_id', $id)
                ->orderBy('survey_date', 'ASC')
                ->pluck('metric_'.($i+1).'_mark');
        }

        $result['datasets'] = (array) [
            '0' => [
                'label' => $metrics_names[0],
                'data' => $marks[0],
            ],
            '1' => [
                'label' => $metrics_names[1],
                'data' => $marks[1],
            ],
            '2' => [
                'label' => $metrics_names[2],
                'data' => $marks[2],
            ],
        ];

        return response()->json($result);
    }
}
