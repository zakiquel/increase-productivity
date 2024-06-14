<?php

namespace App\Services;

use App\Models\User;
use App\Models\Value;

class Service
{
    public function store_user(array $validatedData)
    {
        $user = User::create([
            'first_name' => $validatedData['first_name'],
            'middle_name' => $validatedData['middle_name'],
            'last_name' => $validatedData['last_name'],
            'phone_number' => $validatedData['phone_number'],
            'email' => $validatedData['email'],
            'password' => \Illuminate\Support\Facades\Hash::make($validatedData['password']),
        ]);

        // Generate a token for the new user
        $token = \Tymon\JWTAuth\Facades\JWTAuth::fromUser($user);

        // event(new Registered($user)); //for email validation

        // Return the token and user data
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ], 201);
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
}
