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

class Category extends Controller
{

    public function getCategories()
    {
        return response()->json([
            'success' => true,
            'data' => Categories::orderBy('title', 'ASC')->get()
        ]);
    }

    public function AddCategory(Request $request)
    {
        try {
            Categories::updateOrCreate(
                ['title' => $request->title],
                ['title' => $request->title]
            );

            return response()->json([
                'success' => true,
                'message' =>  'Category successfully added.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function RemoveCategory($id)
    {
        try {
            Categories::where('id', $id)->delete();

            return response()->json([
                'success' => true,
                'message' =>  'Category successfully deleted.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
    
}
