<?php

namespace App\Http\Resources\Metrics;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MetricsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'coefficient' => $this->coefficient,
            'risk_name' => $this->risk_name,
        ];
    }
}
