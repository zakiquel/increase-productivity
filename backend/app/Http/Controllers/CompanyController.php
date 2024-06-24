<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreRequest;
use App\Http\Requests\Company\UpdateRequest;
use App\Http\Resources\Company\CompanyCollectionResource;
use App\Http\Resources\Company\CompanyResource;
use App\Models\Company;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = Company::all();

        return new CompanyCollectionResource($companies);

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
    public function store(StoreRequest $request)
    {
        // Validate the request data
        $data = $request->validated();

        // Create a new employee
        $company = Company::create($data);

        return CompanyResource::make($company);

    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        return CompanyResource::make($company);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Company $company)
    {
        // Validate the request data
        $data = $request->validate();

        // Update the employee with the validated data
        $company->update($data);

        // Return a JSON response with the updated employee
        return CompanyResource::make($company);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        // Delete the employee
        $company->delete();

        // Return a JSON response indicating successful deletion
        return response()->json([
            'success' => true,
            'message' => 'Company deleted successfully.',
        ], 200);

    }
}
