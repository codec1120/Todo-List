<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\{
    Category,
    Todo
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('todo')->group(function () {
    // Categories Routes
    Route::get('/getCategories',[Category::class, 'getCategories'])->name('getCategories');
    Route::post('/category',[Category::class, 'AddCategory'])->name('category');
    Route::delete('/category/{id}',[Category::class, 'RemoveCategory'])->name('Deletecategory');

     // Todos Routes
     Route::get('/todos',[Todo::class, 'getTodos'])->name('todos');
     Route::post('/todos',[Todo::class, 'AddTodo'])->name('addTodos');
     Route::delete('/todos/{id}',[Todo::class, 'RemoveTodo'])->name('removeTodo');
     Route::put('/todos/{id}',[Todo::class, 'todoChangeStatus'])->name('updateTodoStatus');
});
