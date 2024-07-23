<?php

namespace App\Http\Resources\Employee;

use App\Models\Employee;
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
        $employee = Employee::where('user_id', $this->id)->first();
        return [
            'id' => $employee->id,
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'company_id' => $employee->company_id,
            'imgSrc' => $employee->imgSrc,
            'salary' => $employee->salary,
            'birth_date' => $employee->birth_date,
            'position' => $employee->position,
            'status' => $employee->status,
            'date_of_hiring' => $employee->date_of_hiring,
            'work_experience' => $employee->work_experience,
            'balance' => $employee->balance,
        ];
    }
}
