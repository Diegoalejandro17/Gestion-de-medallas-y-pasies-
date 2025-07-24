<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Medalla;
use Illuminate\Http\Request;

class MedallaController extends Controller
{
    public function index()
    {
        return Medalla::with('pais')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'pais_id' => 'required|exists:paises,id',
            'tipo' => 'required|in:oro,plata,bronce',
            'deporte' => 'required|string|max:255', // ✅ validación añadida
        ]);

        return Medalla::create($validated); // ✅ se guarda con 'deporte'
    }

    public function show($id)
    {
        return Medalla::with('pais')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'pais_id' => 'required|exists:paises,id',
            'tipo' => 'required|in:oro,plata,bronce',
            'deporte' => 'required|string|max:255', // ✅ también se valida al actualizar
        ]);

        $medalla = Medalla::findOrFail($id);
        $medalla->update($validated);

        return $medalla;
    }

    public function destroy($id)
    {
        $medalla = Medalla::findOrFail($id);
        $medalla->delete();

        return response()->json(['message' => 'Medalla eliminada']);
    }
}
