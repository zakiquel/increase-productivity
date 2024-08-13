<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Quality;
use App\Models\Value;
use App\Models\ValueQuality;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ValuesQualitiesGraphicsController extends Controller
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

        $result[0] = (array) [];
        $dates[0] = (array) [];
        $makrs[0] = (array) [];
        $i = 0;

        foreach ($values as $value) {
            $result[$i]['title'] = $value->name;

            $value_dates = ValueQuality::whereIn('employee_id', $employees_id)
                ->where('value_id', $value->id)
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

            $j = 0;
            foreach ($dates as $date) {
                $marks[$j] = $value->valueQualities->whereIn('employee_id', $employees_id)
                    ->where('date', $date)
                    ->unique()
                    ->avg('mark');
                $j++;
            }

            $result[$i]['labels'] = Quality::
                whereIn('id', $value->valueQualities->whereIn('employee_id', $employees_id)
                    ->where('date', $dates[0])
                    ->unique()
                    ->pluck('quality_id'))
                ->pluck('name');

            for ($j; $j < 4; $j++) {
                    $dates[$j] = null;
                    $marks[$j] = null;
                }

            $result[$i]['datasets'] = (array) [
                    '0' => [
                        'label' => $dates[0],
                        'data' => $marks[0],
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

            if ($result[$i]['datasets']['3']['label'] == null) {
                unset($result[$i]['datasets']['3']);
            }

            if ($result[$i]['datasets']['2']['label'] == null) {
                unset($result[$i]['datasets']['2']);
            }

            if ($result[$i]['datasets']['1']['label'] == null) {
                unset($result[$i]['datasets']['1']);
            }

            $dates = array();
            $makrs = array();

            $i++;

        }

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $employee = Employee::where('id', $id)->first();

        if (!$employee) {
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

        $result[0] = (array) [];
        $dates[0] = (array) [];
        $makrs[0] = (array) [];
        $i = 0;

        foreach ($values as $value) {
            $result[$i]['title'] = $value->name;

            $value_dates = ValueQuality::where('employee_id', $employee->id)
                ->where('value_id', $value->id)
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

            $j = 0;
            foreach ($dates as $date) {
                $marks[$j] = $value->valueQualities->where('employee_id', $employee->id)
                    ->where('date', $date)
                    ->unique()
                    ->pluck('mark');
                $j++;
            }

            $result[$i]['labels'] = Quality::
                whereIn('id', $value->valueQualities->where('employee_id', $employee->id)
                    ->where('date', $dates[0])
                    ->unique()
                    ->pluck('quality_id'))
                ->pluck('name');

            for ($j; $j < 4; $j++) {
                    $dates[$j] = null;
                    $marks[$j] = null;
                }

            $result[$i]['datasets'] = (array) [
                    '0' => [
                        'label' => $dates[0],
                        'data' => $marks[0],
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

            if ($result[$i]['datasets']['3']['label'] == null) {
                unset($result[$i]['datasets']['3']);
            }

            if ($result[$i]['datasets']['2']['label'] == null) {
                unset($result[$i]['datasets']['2']);
            }

            if ($result[$i]['datasets']['1']['label'] == null) {
                unset($result[$i]['datasets']['1']);
            }

            $dates = array();
            $makrs = array();

            $i++;
        }

        return response()->json($result);
    }

}
