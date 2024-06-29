<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'logoSrc',
        'currency_name',
        'description',
        'user_id',
    ];
    public function values()
    {
        return $this->hasMany(Value::class);
    }
    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
