<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ValueQuality extends Pivot
{
    protected $table = 'value_quality';

    protected $fillable = ['value_id', 'quality_id', 'employee_id', 'mark', 'date', 'sum_risk', 'risk'];

    public function value()
    {
        return $this->belongsTo(Value::class);
    }

    public function quality()
    {
        return $this->belongsTo(Quality::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
