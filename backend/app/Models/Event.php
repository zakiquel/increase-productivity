<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $guarded = false;

    protected $fillable = [
        'name',
        'event_date',
        'imgSrc',
        'format',
        'reward',
        'description',
        'company_id',
    ];

    public function companies()
    {
        return $this->hasMany(Company::class);
    }
}
