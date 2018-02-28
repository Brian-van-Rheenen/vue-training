<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/les-1', function () {
    return view('les-1');
})->name('les-1');

Route::get('/les-2', function () {
    return view('les-2');
})->name('les-2');

Route::get('/master', function () {
    return view('master');
})->name('master');

Route::get('/statuses', 'StatusesController@index');

Route::post('/statuses', 'StatusesController@store');
