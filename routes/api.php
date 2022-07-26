<?php

use Illuminate\Support\Facades\Route;


Route::middleware(['jwt.verify'])->group(function () {

  Route::get('/user', function(){
    return [
      'name' => 'This is data from backend.'
    ];
  });
});
