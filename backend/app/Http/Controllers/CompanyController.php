<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreRequest;
use App\Http\Requests\Company\UpdateRequest;
use App\Http\Resources\Company\CompanyCollectionResource;
use App\Http\Resources\Company\CompanyResource;
use App\Models\Company;
use Illuminate\Support\Facades\Auth;

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
        return $this->service->store_company($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        // Ensure $company is valid and contains data
        if (!$company) {
            return response()->json([
                'success' => false,
                'message' => 'Company not found.'
            ], 404); // Not Found
        }

        // Return a JSON response with the company resource
        return new CompanyResource($company);
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
        $data = $request->validated();
        $company->update($data);
        return new CompanyResource($company);

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
