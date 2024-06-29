<?php

namespace App\Http\Resources\Quality;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QualityResource extends JsonResource
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
            'coefficient' => $this->coefficient,
            'narisk_nameme' => $this->risk_name,
            'description' => $this->description,
        ];
    }
}
