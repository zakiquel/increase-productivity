<?php

namespace App\Http\Resources\Employee;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
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
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'imgSrc' => $this->imgSrc,
            'birth_date' => $this->birth_date,
            'position' => $this->position,
            'age_in_full_years' => $this->age_in_full_years,
            'work_experience' => $this->work_experience,
            'balance' => $this->balance,
            'salary' => $this->salary,
            'phone_number' => $this->phone_number,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
