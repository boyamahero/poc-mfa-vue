<?php

use Illuminate\Support\Facades\Route;

// Redirect all to the front-end router
Route::get('/{pattern?}', function () {
    return view('welcome');
})->where('pattern', '.*');
