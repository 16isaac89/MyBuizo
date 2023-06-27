import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,usePage,useForm } from '@inertiajs/react';
import {Card } from 'flowbite-react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function create() {
const{auth,categories,brands} = usePage().props
let fileObj = [];
let fileArray = [];
let barcodes = []
const animatedComponents = makeAnimated();
let productbrands = []
let productcategories = []
brands.forEach(item=>{
    let permission = { value: item.id, label: item.title }
    productbrands.push(permission)
    })
    categories.forEach(item=>{
        let permission = { value: item.id, label: item.title }
        productcategories.push(permission)
        })

const { data, setData, post, processing, errors,progress } = useForm({
    title: '',
    productimages:[null],
    description: '',
    alert: '',
    unit_id: '',
    sku: '',
    barcode: '',
    manage_stock: '',
    for_sale: '',
    product_type: '',
    applicable_tax: '',
    selling_price_type: '',
    product_category_id: '',
    product_brand_id: '',
});
const uploadMultipleFiles=(e) =>{
  fileObj.push(e.target.files)
  for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
  }
  setData('productimages',fileArray )
}

const submit = (e) => {
    e.preventDefault();

    post(route('products.store'));
};




    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Product</h2>}
        >
            <Head title="Add Product" />
            <Card href="#" >
        
            <section className="max-w-full p-6 bg-white-600 rounded-md shadow-md dark:bg-gray-800">
    <h1 className="text-xl font-bold text-black capitalize dark:text-black">Account settings</h1>
    <form>
        <div className="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-black dark:text-black-200" for="username">Name</label>
                <input id="username" 
                required={true}
                value={data.title}
                onChange={(e)=>setData('title',e.target.value)}
                type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-black dark:text-gray-200" for="emailAddress">SKU</label>
                <input id="emailAddress"
                  required={true}
                  value={data.sku}
                  onChange={(e)=>setData('sku',e.target.value)}
                type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-black dark:text-gray-200" for="password">BarCode</label>
                <Select 
                    options={barcodes}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
                </div>

            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Unit</label>
                <Select 
                    options={barcodes}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
            </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Brand</label>
                <Select 
                    options={productbrands}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
                </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Category</label>
                <Select 
                    options={productcategories}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
            </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Alert Quantity</label>
                <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Manage Stock</label>
                <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Description</label>
                <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-black">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs text-black">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
             
            </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Tax</label>
                <Select 
                    options={barcodes}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
                     </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Selling Price Taxi Type</label>
                <Select 
                    options={barcodes}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
                     </div>
            <div>
                <label className="text-black dark:text-gray-200" for="passwordConfirmation">Product Type</label>
                <Select 
                    options={barcodes}
                    components={animatedComponents}
                    onChange={(selected)=>setData('barcode',selected)}
                    />
                    </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>

 
                
            </Card>
        </AuthenticatedLayout>
    );
}
