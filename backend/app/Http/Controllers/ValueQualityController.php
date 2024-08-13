<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValueQuality\StoreRequest;
use App\Models\Company;
use App\Models\Employee;
use App\Models\Quality;
use App\Models\Value;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\ValueQuality;
use Ramsey\Uuid\Type\Decimal;

class ValueQualityController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $request->validated();

        $company = Company::where('id', Value::where('id', $request->value_id)->pluck('company_id')->first())->first();

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $employee = Employee::where('id', $request->employee_id)->first();

        if (!($employee->company_id == $company->id)) {
            return response()->json(['error' => 'It is not your employee'], 404);
        }

        $qualities = array(
            0 => $request->quality1,
            1 => $request->quality2,
            2 => $request->quality3,
            3 => $request->quality4,
            4 => $request->quality5,
            5 => NULL,
        );

        $user = JWTAuth::parseToken()->authenticate();
        $company = $user->company;

        $risk_coef = array(
            1 => (float) 1,
            2 => (float) 1,
            3 => (float) 0.8,
            4 => (float) 0.6,
            5 => (float) 0.4,
            6 => (float) 0.3,
            7 => (float) 0.1,
            8 => (float) 0.1,
            9 => (float) 0.05,
            10 => (float) 0.05,
        );
        $salary = (Employee::where('id', $request->employee_id)->pluck('salary')->first());

        $risk_1 = null;
        $risk_2 = null;
        $risk_3 = null;
        $risk_4 = null;
        $risk_5 = null;
        if ($qualities[0]){
            $risk_1 = (int) round( (float)$salary * (float)(Quality::where('id', $qualities[0]['id'])->pluck('coefficient')->first()) * (float)$risk_coef[$qualities[0]['mark']], 0);
        }

        if ($qualities[1]){
            $risk_2 = (int) round( (float)$salary * (float)(Quality::where('id', $qualities[1]['id'])->pluck('coefficient')->first()) * (float)$risk_coef[$qualities[1]['mark']], 0);
        }

        if ($qualities[2]){
            $risk_3 = (int) round( (float)$salary * (float)(Quality::where('id', $qualities[2]['id'])->pluck('coefficient')->first()) * (float)$risk_coef[$qualities[2]['mark']], 0);
        }

        if ($qualities[3]){
            $risk_4 = (int) round( (float)$salary * (float)(Quality::where('id', $qualities[3]['id'])->pluck('coefficient')->first()) * (float)$risk_coef[$qualities[3]['mark']], 0);
        }

        if ($qualities[4]){
            $risk_5 = (int) round( (float)$salary * (float)(Quality::where('id', $qualities[4]['id'])->pluck('coefficient')->first()) * (float)$risk_coef[$qualities[4]['mark']], 0);
        }

        $risk_array = array(
            0 => $risk_1,
            1 => $risk_2,
            2 => $risk_3,
            3 => $risk_4,
            4 => $risk_5,
        );

        $sum_risk = $risk_1 + $risk_2 + $risk_3 + $risk_4 + $risk_5;

        $current_date = date('Y-m-d H:i:s');
        $date = date('Y-m-d');
        $prev_date = ValueQuality::where('employee_id', $request->employee_id)
            ->where('value_id', $request->value_id)
            ->where('date', '<', $current_date)
            ->orderBy('date', 'DESC')
            ->pluck('date')
            ->first();
        $days = (strtotime($current_date) - strtotime($prev_date))/ 86400;

        if ($days > 30) {
            for ($i = 0; $qualities[$i]; $i++){
                $valueQuality = new ValueQuality();
                $valueQuality->date = $date;
                $valueQuality->value_id = $request->value_id;
                $valueQuality->quality_id = $qualities[$i]['id'];
                $valueQuality->employee_id = $request->employee_id;
                $valueQuality->mark = $qualities[$i]['mark'];
                $valueQuality->risk = $risk_array[$i];
                $valueQuality->sum_risk = $sum_risk;
                $valueQuality->save();
            }

            return response()->json('Marks added successfully', 201);
        }
        else {
            $prev_value_qualities = ValueQuality::where('employee_id', $request->employee_id)
                ->where('value_id', $request->value_id)
                ->where('date', $prev_date)
                ->get();
            $i = 0;

            foreach ($prev_value_qualities as $val_qual) {
                $val_qual->mark = $qualities[$i]['mark'];
                $val_qual->risk = $risk_array[$i];
                $val_qual->sum_risk = $sum_risk;
                $val_qual->save();
                $i++;
            }
            return response()->json('Marks were rewrited successfully', 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $company = $user->company;

        $value_id = Value::where('company_id', $company->id)->pluck('id')->first();

        if (!$value_id) {
            return response()->json(['error' => 'You have no values'], 404);
        }

        $values_id = Value::where('company_id', $company->id)->pluck('id');

        $current_date = date('Y-m-d H:i:s');

        $prev_date = ValueQuality::where('employee_id', $id)
            ->where('value_id', $value_id)
            ->where('date', '<', $current_date)
            ->orderBy('date', 'DESC')
            ->pluck('date')
            ->first();

        $valueQualities = ValueQuality::whereIn('value_id', $values_id)
            ->where('employee_id', $id)
            ->get();

        return response()->json($valueQualities);
    }
}
