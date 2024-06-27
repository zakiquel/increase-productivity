<?php

namespace App\Services;

use App\Http\Requests\Company\StoreRequest;
use App\Http\Resources\Company\CompanyResource;
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
}
