<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quality extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'coefficient',
        'description',
        'risk_name',
    ];
    public function valuesForEmployees()
    {
        return $this->belongsToMany(Value::class, 'value_quality');
    }
    public function values()
    {
        return $this->belongsToMany(Value::class, 'quality_value');
    }
    public function valueQualities()
    {
        return $this->hasMany(ValueQuality::class);
    }
}
