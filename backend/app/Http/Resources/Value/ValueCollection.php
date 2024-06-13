<?php

namespace App\Http\Resources\Value;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ValueCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_map(static fn ($value) => new ValueResource($value), $this->collection->all());

    }
}
