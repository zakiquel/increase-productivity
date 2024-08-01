<?php

namespace App\Http\Controllers;

use App\Models\QualityValue;
use App\Models\Value;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class QualityValueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();
        $company = $user->company;

        $values_id = Value::where('company_id', $company->id)->pluck('id');

        $qualityValue = QualityValue::whereIn('value_id', $values_id)
            ->get();

            return response()->json($qualityValue);
    }

}
