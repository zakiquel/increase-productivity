<?php

namespace App\Services\Post;

use App\Models\User;

class Service
{
    public function store(array $validatedData)
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
    public function update(array $data, $id){

    }
}
