<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Quality;
use App\Models\Value;
use App\Models\ValueQuality;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class TopQualitiesRiskController extends Controller
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

        $value_date = ValueQuality::where('employee_id', $employees_id[0])
                ->where('value_id', $values[0]->id)
                ->latest('date')
                ->pluck('date')
                ->first();

        $top_risks = ValueQuality::whereIn('employee_id', $employees_id)
            ->where('date', $value_date)
            ->orderBy('risk', 'DESC')
            ->get()
            ->unique('quality');

        $result['labels'] = array();
        $result['datasets']['data'] = array();

        foreach ($top_risks as $top_risk) {
            array_push($result['labels'], Quality::where('id', $top_risk->quality_id)->pluck('risk_name')->first());
            array_push($result['datasets']['data'], $top_risk->risk);
        }

        $result['datasets'] = array($result['datasets']);
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

        $top_risks = ValueQuality::where('employee_id', $employee->id)
            ->where('date', $value_date)
            ->orderBy('risk', 'DESC')
            ->get()
            ->unique('quality');

        $result['labels'] = array();
        $result['datasets']['data'] = array();

        foreach ($top_risks as $top_risk) {
            array_push($result['labels'], Quality::where('id', $top_risk->quality_id)->pluck('risk_name')->first());
            array_push($result['datasets']['data'], $top_risk->risk);
        }

        $result['datasets'] = array($result['datasets']);
        return response()->json($result);
    }
}
