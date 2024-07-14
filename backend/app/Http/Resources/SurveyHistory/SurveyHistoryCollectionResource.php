<?php

namespace App\Http\Resources\SurveyHistory;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SurveyHistoryCollectionResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_map(static fn ($survey) => new SurveyHistoryResource($survey), $this->collection->all());
    }
}
