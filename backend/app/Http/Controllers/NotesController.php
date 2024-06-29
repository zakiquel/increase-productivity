<?php

namespace App\Http\Controllers;

use App\Http\Requests\Notes\StoreRequest;
use App\Http\Requests\Notes\UpdateRequest;
use App\Http\Resources\Note\NoteCollectionResource;
use App\Http\Resources\Note\NoteResource;
use App\Models\Company;
use App\Models\Employee;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class NotesController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        $employee_company_id  = Company::where('id', Employee::where('id', $request->employee_id)->pluck('company_id')->first())
            ->pluck('id')
            ->first();

        if (!($company->id == $employee_company_id)) {
            return response()->json(['error' => 'not your employee'], 404);
        }

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $note = Note::create($data);

        return NoteResource::make($note);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        $employee_company_id = Company::where('id', Employee::where('id', $id)->pluck('company_id')->first())
            ->pluck('id')
            ->first();

        if (!($company->id == $employee_company_id)) {
            return response()->json(['error' => 'not your employee'], 404);
        }

        if (!$company) {
            return response()->json(['error' => 'You have no companies'], 404);
        }

        $notes = Note::where('employee_id', $id)->get();

        return new NoteCollectionResource($notes);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, int $id)
    {
        $data = $request->validated();

        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        $note = Note::where('id', $id)->first();

        if (!$note) {
            return response()->json(['error' => 'Note does not exist'], 404);
        }

        $employee_company_id = Company::where('id', Employee::where('id', $note->employee_id)->pluck('company_id')->first())
            ->pluck('id')
            ->first();

        if (!($company->id == $employee_company_id)) {
            return response()->json(['error' => 'not your employee'], 404);
        }

        if (!$note) {
            return response()->json(['error' => 'There is no note'], 403);
        }

        $note->update($data);

        return NoteResource::make($note);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $company = $user->company;

        $note = Note::where('id', $id)->first();

        $employee_company_id = Company::where('id', Employee::where('id', $note->employee_id)->pluck('company_id')->first())
            ->pluck('id')
            ->first();

        if (!($company->id == $employee_company_id)) {
            return response()->json(['error' => 'not your employee'], 404);
        }

        if (!$note) {
            return response()->json(['error' => 'There is no note'], 403);
        }

        $note->delete();

        return response()->json([
            'success' => true,
            'message' => 'Note deleted successfully.',
        ], 200);
    }
}
