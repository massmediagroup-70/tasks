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

Route::group(['middleware' => ['ip']], function () {

    Route::get('/', 'PostController@index');
    Route::get('/create', 'PostController@create');
    Route::post('/', 'PostController@store');
    Route::post('/search', 'PostController@search');

});
