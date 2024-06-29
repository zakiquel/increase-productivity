<?php

namespace App\Http\Controllers;

use App\Http\Requests\File\StoreRequest;
use App\Http\Resources\File\FileCollectionResource;
use App\Http\Resources\File\FileResource;
use App\Models\Company;
use App\Models\Employee;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Facades\JWTAuth;

class FileController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $data['original_name'] = $request->file('file')->getClientOriginalName();

        $data['file'] = Storage::put('files', $data['file']);

        $file = File::create($data);

        return FileResource::make($file);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $employee_company_id = Company::where('id', Employee::where('id', $id)->pluck('company_id')->first())
            ->pluck('id')
            ->first();

        if (!($company->id == $employee_company_id)) {
            return response()->json(['error' => 'not your employee'], 404);
        }

        $files = File::where('employee_id', $id)->get();

        return new FileCollectionResource($files);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $file = File::where('id', $id)->first();

        if (!$file) {
            return response()->json(['error' => 'Not found'], 404);
        }

        $employee_company_id = Company::where('id', Employee::where('id', $file->employee_id)->pluck('company_id')->first())
            ->pluck('id')
            ->first();

        if (!($company->id == $employee_company_id)) {
            return response()->json(['error' => 'not your employee'], 404);
        }

        Storage::disk('public')->delete($file->file_name);

        $file->delete();

        return response()->json([
            'success' => true,
            'message' => 'File deleted successfully.',
        ], 200);
    }
}
