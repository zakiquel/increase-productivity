<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Http\Resources\Employee\EmployeeCollectionResource;
use App\Http\Resources\Employee\EmployeeResource;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->service->index_employee();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeRequest $request)
    {
        return $this->service->store_employee($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return $this->service->show_employee($employee);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        return $this->service->update_employee($request ,$employee);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        return $this->service->delete_employee($employee);
    }
}
