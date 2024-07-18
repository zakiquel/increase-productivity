<?php

namespace App\Http\Controllers;

use App\Http\Requests\Absenteeism\StoreRequest;
use App\Models\AbsenteeismRate;
use Illuminate\Http\Request;

class CollectiveMetricController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->service->index_absenteeism_rate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        return $this->service->store_absenteeism_rate($request);
    }
}
