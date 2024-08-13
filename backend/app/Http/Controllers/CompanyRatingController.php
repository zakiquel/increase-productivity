<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\ValueQuality;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class CompanyRatingController extends Controller
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

        $employees_id = Employee::where('company_id', $company->id)
            ->pluck('id');

        if (!$employees_id) {
            return response()->json(['error' => 'You have no employees'], 404);
        }

        $date = ValueQuality::whereIn('employee_id', $employees_id)
            ->orderBy('date', 'DESC')
            ->pluck('date')
            ->first();

        if (!$date) {
                return response()->json(['error' => 'You have no value'], 404);
            }

        $qualities_count = ValueQuality::whereIn('employee_id', $employees_id)
            ->where('date', $date)
            ->orderBy('risk', 'DESC')
            ->count();

        $qualities_marks_sum = ValueQuality::whereIn('employee_id', $employees_id)
            ->where('date', $date)
            ->sum('mark');

        $result = round($qualities_marks_sum/($qualities_count*10), 2);

        return response()->json($result);
    }
}
