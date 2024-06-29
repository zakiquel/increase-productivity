<?php

namespace App\Http\Controllers;

use App\Http\Requests\Value\StoreValueRequest;
use App\Http\Requests\Value\UpdateValueRequest;
use App\Http\Resources\Value\ValueCollection;
use App\Http\Resources\Value\ValueResource;
use App\Models\Value;
use Tymon\JWTAuth\Facades\JWTAuth;

class ValueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();
        $company = $user->company;
        if (!$company) {
            return response()->json([
                'success' => false,
                'message' => 'Company not found.'
            ], 404); // Not Found
        }
        $values = $company->values;
        return new ValueCollection($values);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreValueRequest $request)
    {
        // Validate the incoming request
        $validatedData = $request->validated();

        // Call the service method and return its response
        return $this->service->store_value($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Value $value)
    {
        return ValueResource::make($value);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateValueRequest $request, Value $value)
    {
        $validatedData = $request->validated();

        $value->update($validatedData);

        return ValueResource::make($value);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Value $value)
    {
        // Delete the Value instance
        $value->delete();

        return response()->json(['message' => 'Value deleted successfully']);
    }
}
