<?php

namespace App\Http\Resources\Absenteeism;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AbsenteeismCollectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_map(static fn ($absenteeism) => new AbsenteeismResource($absenteeism), $this->collection->all());
    }
}
