<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductBrand;
use Inertia\Inertia;
use App\Http\Requests\StoreProductBrandRequest;
use App\Http\Controllers\Traits\MediaUploadingTrait;
use App\Http\Controllers\Services\ImageService;

class ProductBrandController extends Controller
{
    use MediaUploadingTrait;
    public function index(){
        $productbrands = ProductBrand::with('media')->get();
       // dd($productbrands);
        return Inertia::render('Admin/productbrand/index',[
            "productbrands" => $productbrands
        ]);
    }
    public function create(){
        return Inertia::render('Admin/productbrand/create');
    }
    
    public function store(StoreProductBrandRequest $request)
    {
    
        $requestimage = request();
        //process the image and make sure its the right size
        $processimage = (new ImageService)->storeMedia($requestimage);
        //create the brand
        $brand = ProductBrand::create($request->all());
    //save image for the broduct brand
        if ($request->imageresource) {
            $brand->addMedia(storage_path('tmp/uploads/' . basename($processimage->name)))->toMediaCollection('imageresource');
        }
    
        return redirect()->route('productbrands.index');
    }
}
