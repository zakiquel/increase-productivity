<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();
        return response()->json([
            'message' => 'Success',
            'employees' => $employees
        ], 200);
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
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'position' => 'required|string|max:255',
            'work_experience' => 'required|numeric|between:0,9999.99',
            'salary' => 'required|numeric',
            'email' => 'required|email|unique:employees,email',
            'phone_number' => 'required|string|max:20|unique:employees,phone_number',
        ]);

        // Create a new employee
        $employee = Employee::create($validatedData);

        // Return a JSON response with the created employee and a success message
        return response()->json([
            'success' => true,
            'message' => 'Employee created successfully.',
            'data' => $employee
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        $employee = Employee::findOrFail($employee->id);
        return response()->json([
            'message' => 'Success',
            'employee' => $employee
        ], 200);
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
    public function update(Request $request, Employee $employee)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'position' => 'required|string|max:255',
            'work_experience' => 'required|numeric|between:0,9999.99',
            'salary' => 'required|numeric',
            'email' => [
                'required',
                'email',
                Rule::unique('employees')->ignore($employee->id)
            ],
            'phone_number' => [
                'required',
                'string',
                'max:20',
                Rule::unique('employees')->ignore($employee->id)
            ],
        ]);

        // Update the employee with the validated data
        $employee->update($validatedData);

        // Return a JSON response with the updated employee and a success message
        return response()->json([
            'success' => true,
            'message' => 'Employee updated successfully.',
            'data' => $employee
        ], 200);
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
