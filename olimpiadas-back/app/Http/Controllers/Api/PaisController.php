<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pais;
use Illuminate\Http\Request;

class PaisController extends Controller
{
    public function index()
    {
        return response()->json(Pais::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string',
            'codigo' => 'required|string|size:3|unique:paises,codigo'
        ]);

        return Pais::create($validated);
    }

    public function show($id)
    {
        return Pais::with('medallas')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $pais = Pais::findOrFail($id);
        $pais->update($request->all());
        return $pais;
    }

    public function destroy($id)
    {
        $pais = Pais::findOrFail($id);
        $pais->delete();
        return response()->json(['message' => 'País eliminado']);
    }
}

