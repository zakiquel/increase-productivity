<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'imgSrc',
        'birth_date',
        'age_in_full_years',
        'position',
        'work_experience',
        'salary',
        'email',
        'phone_number',
        'balance',
    ];
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
