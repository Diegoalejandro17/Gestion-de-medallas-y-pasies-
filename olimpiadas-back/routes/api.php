<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PaisController;
use App\Http\Controllers\Api\MedallaController;

Route::middleware('api')->group(function () {
    Route::apiResource('paises', PaisController::class);
    Route::apiResource('medallas', MedallaController::class);
});
