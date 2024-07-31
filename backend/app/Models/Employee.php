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
        'imgSrc',
        'salary',
        'birth_date',
        'position',
        'status',
        'date_of_hiring',
        'work_experience',
        'balance',
        'company_id',
        'user_id',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
