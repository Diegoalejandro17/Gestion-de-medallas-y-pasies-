<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'codigo'];
    protected $table = 'paises'; // ← Esta línea soluciona el problema

    public function medallas()
    {
        return $this->hasMany(Medalla::class);
    }
}
