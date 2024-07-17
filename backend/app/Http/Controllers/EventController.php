<?php

namespace App\Http\Controllers;

use App\Http\Requests\Event\StoreRequest;
use App\Http\Requests\Event\UpdateRequest;
use App\Http\Resources\Employee\EmployeeCollectionResource;
use App\Http\Resources\Employee\EmployeeResource;
use App\Http\Resources\Event\EventCollectionResource;
use App\Http\Resources\Event\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->service->index_event();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        return $this->service->store_event($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return $this->service->show_event($event);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Event $event)
    {
        return $this->service->update_event($request, $event);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        return $this->service->destroy_event($event);
    }
}
