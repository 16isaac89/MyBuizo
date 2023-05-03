import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,usePage,useForm } from '@inertiajs/react';
import { Label,TextInput,Checkbox,Button,Card } from 'flowbite-react';


import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';

import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export default function create() {
const{auth} = usePage().props
let fileObj = [];
let fileArray = [];


const { data, setData, post, processing, errors,progress } = useForm({
    title: '',
    productimages:[null],
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Permission</h2>}
        >
            <Head title="Profile" />
            <Card href="#" className='m-10'>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <form className="flex flex-col gap-4" onSubmit={submit}>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="Title"
        value="Title"
      />
    </div>
    <TextInput
      id="title"
      type="text"
      placeholder="Title"
      required={true}
      value={data.title}
      onChange={(e)=>setData('title',e.target.value)}
    />

{data.categoryimage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(data.categoryimage)}
          />
          <br />
          <button onClick={() => setData('catehoryimage',null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      <div className="form-group multi-preview">
                    {(fileArray || []).map(url => (
                        <img src={url}  alt="not found"
                        width={"250px"} />
                    ))}
                </div>
 
                <div className="form-group">
                    <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
                </div>
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setData('categoryimage',event.target.files[0]);
        }}
      />
    
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
                </div>
            </div>
            </Card>
        </AuthenticatedLayout>
    );
}
