<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use Illuminate\Http\{
    Request,
    Response
};

use App\Models\{
    Todos,
    Categories
};

class Todo extends Controller
{
    
    public function index()
    {   
        return view('todo.layouts.index', [
            'categories' => Categories::orderBy('title', 'ASC')->get(),
            'todo' => Todos::with('category')->orderBy('title', 'ASC')->get()
        ]);
    }

    public function getTodos(Request $request)
    {
        $todo = Todos::with('category')
                    ->when($request->category_id && $request->category_id >= 0, fn($query) =>
                        $query->where('category_id', $request->category_id)
                    )
                    ->orderBy('title', 'ASC')
                    ->get();

        return response()->json([
            'success' => true,
            'data' => $todo
        ]);
    }

    public function AddTodo(Request $request)
    {
        try {
            Todos::updateOrCreate(
                ['id' => $request->id],
                [
                    'title' => $request->title, 
                    'category_id' => $request->category_id
                ]
            );

            return response()->json([
                'success' => true,
                'message' =>  'Todo successfully added.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function RemoveTodo($id)
    {
        try {
            Todos::where('id', $id)->delete();

            return response()->json([
                'success' => true,
                'message' =>  'Todo successfully deleted.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function todoChangeStatus(Request $request, $id)
    {
        try {
            Todos::where(['id' => $id])
                ->update(['checked' => $request->checked]);

            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
    
}
