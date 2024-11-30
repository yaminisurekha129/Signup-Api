<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DetailController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', [DetailController::class, 'store']); 
Route::get('/signup', [DetailController::class, 'index']); 
Route::get('/signup/{id}', [DetailController::class, 'show']); 
