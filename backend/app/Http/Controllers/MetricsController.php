<?php

namespace App\Http\Controllers;

use App\Http\Requests\Metrics\StoreRequest;
use App\Http\Requests\Metrics\UpdateRequest;
use App\Models\Metric;
use Illuminate\Http\Request;

class MetricsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->service->index_metric();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        return $this->service->store_metric($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Metric $metric)
    {
        return $this->service->update_metric($request, $metric);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Metric $metric)
    {
        return $this->service->destroy_metric($metric);
    }
}
