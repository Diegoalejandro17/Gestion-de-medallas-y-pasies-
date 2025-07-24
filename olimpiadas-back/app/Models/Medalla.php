<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medalla extends Model
{
    use HasFactory;

    protected $fillable = ['pais_id', 'tipo', 'deporte']; // ✅ Aquí añadimos 'deporte'

    public function pais()
    {
        return $this->belongsTo(Pais::class);
    }
}
