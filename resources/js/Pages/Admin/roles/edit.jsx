import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,usePage,useForm } from '@inertiajs/react';
import { Label,TextInput,Checkbox,Button,Card } from 'flowbite-react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

export default function edit() {
    const animatedComponents = makeAnimated();
const{auth,permissions,role} = usePage().props

let options =[]
let selectedoptions = []
 permissions.forEach(item=>{
let permission = { value: item.id, label: item.title }
options.push(permission)
})
role.permissions.forEach(item =>{
    let permission = { value: item.id, label: item.title }
    selectedoptions.push(permission)
})
const { data, setData, put, processing, errors } = useForm({
    title: role.title,
    permissions:[]
});

const submit = (e) => {
    e.preventDefault();

    put(route('roles.update',role.id));
};
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Role</h2>}
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
  </div>
  <div>
    <div className="mt-2 block">
      <Label
        htmlFor="permissions"
        value="Select Permissions"
      />
    </div>
    <Select 
    options={options}
    components={animatedComponents}
    isMulti 
    onChange={(selected)=>setData('permissions',selected)}
    defaultValue={selectedoptions}
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
