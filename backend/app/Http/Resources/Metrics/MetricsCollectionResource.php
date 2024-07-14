<?php

namespace App\Http\Resources\Metrics;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MetricsCollectionResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_map(static fn ($metric) => new MetricsResource($metric), $this->collection->all());
    }
}
