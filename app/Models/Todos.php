<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todos extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category_id',
        'checked'
    ];

    /**
     * Get referenced Categpry
     * 
     * @return App\Models\Categories
     */
    public function category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }
}
