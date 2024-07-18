<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbsenteeismRate extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'coefficient',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
