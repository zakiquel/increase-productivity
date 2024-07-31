<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quality\StoreQualityRequest;
use App\Http\Requests\Quality\UpdateQualityRequest;
use App\Http\Resources\Quality\QualityCollection;
use App\Http\Resources\Quality\QualityResource;
use App\Models\Quality;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QualityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get the authenticated user
        $user = Auth::user();
        $company = $user->company;
        if (!$company) {
            return response()->json([
                'success' => false,
                'message' => 'Company not found.'
            ], 404); // Not Found
        }

        $qualities = Quality::get();

        return new QualityCollection($qualities);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQualityRequest $request)
    {
        // Validate the incoming request
        $validatedData = $request->validated();

        // Create a new Quality instance
        $quality = Quality::create($validatedData);

        return QualityResource::make($quality);
    }

    /**
     * Display the specified resource.
     */
    public function show(Quality $quality)
    {
        return new QualityResource($quality);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQualityRequest $request, Quality $quality)
    {
        // Validate the incoming request
        $validatedData = $request->validated();

        // Update the quality
        $quality->update($validatedData);

        return QualityResource::make($quality);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quality $quality)
    {
        // Delete the quality
        $quality->delete();

        return response()->json(['message' => 'Quality deleted successfully']);
    }
}
