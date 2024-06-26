<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json(['error' => 'Unauthorized. Missing token.'], 401);
        }

        try {
            $user = Auth::guard('api')->authenticate($token);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized. Invalid token.'], 401);
        }

        if (!$user) {
            return response()->json(['error' => 'Unauthorized. User not found.'], 401);
        }

        return $next($request);
    }
}
