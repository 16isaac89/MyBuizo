<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth','verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('permissions','Admin\PermissionsController');
    Route::resource('roles','Admin\RolesController');
    Route::resource('users','Admin\UsersController');
    Route::resource('productbrands','Admin\ProductBrandController');
    Route::post('productcategories/media', 'ProductCategoryController@storeMedia')->name('productcategories.storeMedia');
    Route::resource('productcategories','Admin\ProductCategoryController');
    Route::resource('productvariations','Admin\ProductVariationController');
    Route::resource('products','Admin\ProductController');
});

require __DIR__.'/auth.php';
