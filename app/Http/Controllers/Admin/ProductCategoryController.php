<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Productcategory;
use App\Http\Requests\StoreProductCategoryRequest;
use App\Http\Controllers\Traits\MediaUploadingTrait;
use App\Http\Controllers\Services\ImageService;

class ProductCategoryController extends Controller
{
use MediaUploadingTrait;

public function index(){
    $productcategories = ProductCategory::with('media')->get();
    //dd($productcategories);
    return Inertia::render('Admin/productcategory/index',[
        "productcategories" => $productcategories
    ]);
}
public function create(){
    return Inertia::render('Admin/productcategory/create');
}

public function store(StoreProductCategoryRequest $request)
{

    $requestimage = request();
    $processimage = (new ImageService)->storeMedia($requestimage);

    $category = ProductCategory::create($request->all());

    if ($request->categoryimage) {
        $category->addMedia(storage_path('tmp/uploads/' . basename($processimage->name)))->toMediaCollection('categoryimage');
    }

    return redirect()->route('productcategories.index');
}
}
