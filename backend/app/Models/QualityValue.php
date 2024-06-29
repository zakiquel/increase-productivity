<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QualityValue extends Model
{
    protected $table = 'quality_value';

    protected $fillable = ['value_id', 'quality_id',];
}
