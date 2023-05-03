<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use App\Models\ProductCategory;
use App\Models\ProductBrand;


class ProductController extends Controller
{
    public function index(){
        $products = Product::with('media')->get();
        return Inertia::render('Admin/products/index',[
            'products'=>$products
        ]);
    }


    public function create(){
        $categories = ProductCategory::all();
        $brands = ProductBrand::all();
        return Inertia::render('Admin/products/create',[
            'brands'=>$brands,
            'categories'=>$categories
        ]);
    }


}
