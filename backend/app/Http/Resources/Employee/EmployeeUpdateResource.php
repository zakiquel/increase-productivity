<?php

namespace App\Http\Resources\Employee;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeUpdateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'company_id' => $this->company_id,
            'imgSrc' => $this->imgSrc,
            'salary' => $this->salary,
            'birth_date' => $this->birth_date,
            'position' => $this->position,
            'status' => $this->status,
            'date_of_hiring' => $this->date_of_hiring,
            'work_experience' => $this->work_experience,
            'balance' => $this->balance,
        ];
    }
}
