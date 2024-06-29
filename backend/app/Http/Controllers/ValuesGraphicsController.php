<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Value;
use App\Models\ValueQuality;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ValuesGraphicsController extends Controller
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

        $employees_id = Employee::where('company_id', $company->id)->pluck('id');

        $values_id = ValueQuality::whereIn('employee_id', $employees_id)->pluck('value_id')->unique();

        $values = Value::where('company_id', $company->id)
            ->whereIn('id', $values_id)->get();

        if (!$values) {
            return response()->json(['error' => 'You have no values'], 404);
        }

        $result = array();
        $dates = array();
        $marks = array();

        $result['labels'] = Value::where('company_id', $company->id)
            ->whereIn('id', $values_id)->pluck('name');

        $value_dates = ValueQuality::where('employee_id', $employees_id[0])
            ->where('value_id', $values[0]->id)
            ->latest('date')
            ->pluck('date')
            ->unique();

        $j = 0;
        foreach ($value_dates as $date) {
            $dates[$j] = $date;
            $j++;
        }

        $dates = array_reverse($dates);

        if ($j > 4) {
            $dates = array_slice($dates, -4, 4);
        }

        for ($k = 0; $k < $j; $k++) {
            $i = 0;
            foreach ($values as $value) {
                $marks[$k][$i] = ValueQuality::where('value_id', $value->id)
                    ->whereIn('employee_id', $employees_id)
                    ->where('date', $dates[$k])
                    ->avg('mark');

                $marks[$k][$i] = round($marks[$k][$i], 0);
                $i++;
            }
        }

        for ($j; $j < 4; $j++) {
            $dates[$j] = null;
            $marks[$j] = null;
        }

        $result['datasets'] = (array) [
            '0' => [
                'label' => $dates[0],
                'data' =>  $marks[0],
            ],
            '1' => [
                'label' => $dates[1],
                'data' => $marks[1],
            ],
            '2' => [
                'label' => $dates[2],
                'data' => $marks[2],
            ],
            '3' => [
                'label' => $dates[3],
                'data' => $marks[3],
            ],
        ];

        if ($result['datasets']['3']['label'] == null) {
            unset($result['datasets']['3']);
        }

        if ($result['datasets']['2']['label'] == null) {
            unset($result['datasets']['2']);
        }

        if ($result['datasets']['1']['label'] == null) {
            unset($result['datasets']['1']);
        }

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        $user = JWTAuth::parseToken()->authenticate();

        if (!Employee::where('id', $employee->id)->first()) {
            return response()->json(['error' => 'Not found'], 404);
        }

        $company = $user->company;

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $values_id = ValueQuality::where('employee_id', $employee->id)->pluck('value_id')->unique();

        $values = Value::where('company_id', $company->id)
            ->whereIn('id', $values_id)->get();

        if (!$values) {
            return response()->json(['error' => 'You have no values'], 404);
        }

        $result = array();
        $dates = array();
        $marks = array();

        $result['labels'] = Value::where('company_id', $company->id)
            ->whereIn('id', $values_id)->pluck('name');

        $value_dates = ValueQuality::where('employee_id', $employee->id)
            ->where('value_id', $values[0]->id)
            ->latest('date')
            ->pluck('date')
            ->unique();

        $j = 0;
        foreach ($value_dates as $date) {
            $dates[$j] = $date;
            $j++;
        }

        $dates = array_reverse($dates);

        if ($j > 4) {
            $dates = array_slice($dates, -4, 4);
        }

        for ($k = 0; $k < $j; $k++) {
            $i = 0;
            foreach ($values as $value) {
                $marks[$k][$i] = ValueQuality::where('value_id', $value->id)
                    ->where('employee_id', $employee->id)
                    ->where('date', $dates[$k])
                    ->avg('mark');

                $marks[$k][$i] = round($marks[$k][$i], 0);
                $i++;
            }
        }

        for ($j; $j < 4; $j++) {
            $dates[$j] = null;
            $marks[$j] = null;
        }

        $result['datasets'] = (array) [
            '0' => [
                'label' => $dates[0],
                'data' =>  $marks[0],
            ],
            '1' => [
                'label' => $dates[1],
                'data' => $marks[1],
            ],
            '2' => [
                'label' => $dates[2],
                'data' => $marks[2],
            ],
            '3' => [
                'label' => $dates[3],
                'data' => $marks[3],
            ],
        ];

        if ($result['datasets']['3']['label'] == null) {
            unset($result['datasets']['3']);
        }

        if ($result['datasets']['2']['label'] == null) {
            unset($result['datasets']['2']);
        }

        if ($result['datasets']['1']['label'] == null) {
            unset($result['datasets']['1']);
        }

        return response()->json($result);
    }
}
