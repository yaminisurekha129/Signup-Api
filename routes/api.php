<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DetailController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/details', [DetailController::class, 'store']); 
Route::get('/details', [DetailController::class, 'index']); 
Route::get('/details/{id}', [DetailController::class, 'show']); 
