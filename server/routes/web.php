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

Route::get('/','CordovaController@test');




Route::post('/upload','MediaController@upload');

Route::post('/preview','CordovaController@preview');

Route::post('/build','CordovaController@build');

Route::post('/new','CordovaController@createNew');

Route::post('/delete','CordovaController@delete');

Route::post('/getmedia','MediaController@getAll');