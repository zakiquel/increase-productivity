<?php

namespace App\Http\Controllers;

use App\Http\Requests\SurveyHistory\StoreRequest;
use App\Http\Requests\SurveyHistory\UpdateRequest;
use App\Models\SurveyHistory;
use Illuminate\Http\Request;

class SurveyHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->service->index_survey_history();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        return $this->service->store_survey_history($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(SurveyHistory $surveyHistory)
    {
        return $this->service->show_survey_history($surveyHistory);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, SurveyHistory $surveyHistory)
    {
        return $this->service->update_survey_history($request, $surveyHistory);
    }

}
