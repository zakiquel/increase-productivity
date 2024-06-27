<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Http\Resources\Employee\EmployeeCollectionResource;
use App\Http\Resources\Employee\EmployeeResource;
use App\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();

        return new EmployeeCollectionResource($employees);
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
        // Validate the request data
        $data = $request->validated();

        // Create a new employee
        $employee = Employee::create($data);

        return EmployeeResource::make($employee);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return EmployeeResource::make($employee);
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
        // Validate the request data
        $data = $request->validated();

        // Update the employee with the validated data
        $employee->update($data);

        // Return a JSON response with the updated employee
        return EmployeeResource::make($employee);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        // Delete the employee
        $employee->delete();

        // Return a JSON response indicating successful deletion
        return response()->json([
            'success' => true,
            'message' => 'Employee deleted successfully.',
        ], 200);
    }
}
