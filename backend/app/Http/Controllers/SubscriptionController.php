<?php

namespace App\Http\Controllers;

use App\Http\Requests\Subscription\StoreSubscriptionRequest;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubscriptionRequest $request)
    {
        $validatedData = $request->validated();

        // Create a new subscription using the validated data
        $subscription = Subscription::create([
            'subscription_type' => $validatedData['subscription_type'],
            'status' => $validatedData['status'],
            'price' => $validatedData['price'],
            'duration_months' => $validatedData['duration_months'],
            'start_date' => $validatedData['start_date'],
            'end_date' => $validatedData['end_date'],
        ]);

        return response()->json(['subscription' => $subscription, 'message' => 'Subscription created successfully.'], 201);
    }
    public function cancel(Request $request, $id)
    {
        // Find the subscription by ID
        $subscription = Subscription::findOrFail($id);

        // Update the subscription status to 'cancelled'
        $subscription->update(['status' => 'cancelled']);

        return response()->json(['message' => 'Subscription cancelled successfully.']);
    }
}
