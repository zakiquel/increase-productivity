<?php

namespace App\Services;

use App\Http\Requests\Company\StoreRequest;
use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Http\Requests\Event\UpdateRequest;
use App\Http\Resources\Company\CompanyResource;
use App\Http\Resources\Employee\EmployeeCollectionResource;
use App\Http\Resources\Employee\EmployeeResource;
use App\Http\Resources\Event\EventCollectionResource;
use App\Http\Resources\Event\EventResource;
use App\Models\Employee;
use App\Models\Event;
use App\Models\User;
use App\Models\Value;
use App\Models\Company;

use Illuminate\Support\Facades\Auth;

class Service
{
    public function store_user(array $validatedData)
    {
        $user = User::create([
            'first_name' => $validatedData['first_name'],
            'middle_name' => $validatedData['middle_name'],
            'last_name' => $validatedData['last_name'],
            'role' => $validatedData['role'],
            'email' => $validatedData['email'],
            'password' => \Illuminate\Support\Facades\Hash::make($validatedData['password']),
        ]);

        // Generate a token for the new user
        $token = \Tymon\JWTAuth\Facades\JWTAuth::fromUser($user);

        // Return the token and user data
        return [
            'message' => 'User successfully registered',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
    }
    public function store_value(array $validatedData)
    {
        // Check if the number of Value instances is 8 or more
        $count = Value::count();
        if ($count >= 8) {
            return response()->json(['error' => 'Maximum number of Value instances reached.'], 403);
        }

        // Create a new Value instance
        $value = Value::create(['name' => $validatedData['name']]);

        return response()->json($value, 201);
    }

    public function update(array $data, $id){

    }

    public function store_company(\App\Http\Requests\Company\StoreRequest $request)
    {
        $user = Auth::user();

        // Check if the user already has a company
        if ($user->company) {
            return response()->json([
                'success' => false,
                'message' => 'You already have a company.'
            ], 403);
        }

        // If user doesn't have a company, return success status
        return $this->create_company($request);
    }
    private function create_company(StoreRequest $request)
    {
        // Validate the request data
        $data = $request->validated();

        // Add the authenticated user's ID to the data
        $data['user_id'] = auth()->id();

        // Create a new company
        $company = Company::create($data);

        return CompanyResource::make($company);
    }
    public function index_employee()
    {
        $company = \App\Models\Company::where('user_id', Auth::id())->first();
        if (!$company) {
            return response()->json(['error' => 'Company not found'], 404);
        }
        $employees = Employee::where('company_id', $company->id)->get();

        return new EmployeeCollectionResource($employees);
    }
    public function show_employee($employee)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();
        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return new EmployeeResource($employee);
    }
    public function store_employee(StoreEmployeeRequest $request)
    {
        $data = $request;

        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if (!$company_id) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $data['company_id'] = $company_id;

        $employee = Employee::create($data);

        return EmployeeResource::make($employee);
    }
    public function update_employee(UpdateEmployeeRequest $request, Employee $employee)
    {

        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();
        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        $data = $request->validated();

        $employee->update($data);

        return new EmployeeResource($employee);
    }
    public function delete_employee(Employee $employee)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();
        if ($employee->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $employee->delete();

        return response()->json([
            'success' => true,
            'message' => 'Employee deleted successfully.',
        ], 200);
    }

    public function index_event()
    {
        $company = \App\Models\Company::where('user_id', Auth::id())->first();

        if (!$company) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $Events = Event::where('company_id', $company->id)->get();

        return new EventCollectionResource($Events);
    }

    public function show_event(Event $event)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if ($event->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return new EventResource($event);
    }

    public function store_event(\App\Http\Requests\Event\StoreRequest $request)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if (!$company_id) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        $data['company_id'] = $company_id;

        $event = Event::create($data);

        return EventResource::make($event);
    }

    public function update_event(UpdateRequest $request, Event $event)
    {

        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if ($event->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $data = $request->validated();
        $event->update($data);

        return new EventResource($event);
    }
    public function destroy_event(Event $event)
    {
        $company_id = \App\Models\Company::where('user_id', Auth::id())->pluck('id')->first();

        if ($event->company_id != $company_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $event->delete();

        return response()->json([
            'success' => true,
            'message' => 'Event deleted successfully.',
        ], 200);
    }
}
