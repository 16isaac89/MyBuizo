import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,usePage,useForm } from '@inertiajs/react';
import { Label,TextInput,Checkbox,Button,Card } from 'flowbite-react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

export default function create() {
    const animatedComponents = makeAnimated();
const{auth,roles} = usePage().props
let options =[]

 roles.forEach(item=>{
let role = { value: item.id, label: item.title }
options.push(role)
})
const { data, setData, post, processing, errors } = useForm({
    name: '',
    email:'',
    password:'',
    roles:[]
});

const submit = (e) => {
    e.preventDefault();
    post(route('users.store'));
};
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create User</h2>}
        >
            <Head title="Create User" />
            <Card href="#" className='m-10'>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <form className="flex flex-col gap-4" onSubmit={submit}>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="Name"
        value="Name"
      />
    </div>
    <TextInput
      id="name"
      type="text"
      placeholder="Name"
      required={true}
      value={data.name}
      onChange={(e)=>setData('name',e.target.value)}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="Email"
        value="Email"
      />
    </div>
    <TextInput
      id="email"
      type="text"
      placeholder="Email"
      required={true}
      value={data.email}
      onChange={(e)=>setData('email',e.target.value)}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="Password"
        value="Password"
      />
    </div>
    <TextInput
      id="password"
      type="text"
      placeholder="Password"
      required={true}
      value={data.title}
      onChange={(e)=>setData('password',e.target.value)}
    />
  </div>

  <div>
    <div className="mt-2 block">
      <Label
        htmlFor="roles"
        value="Select Roles"
      />
    </div>
    <Select 
    options={options}
    components={animatedComponents}
    isMulti 
    onChange={(selected)=>setData('roles',selected)}
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
