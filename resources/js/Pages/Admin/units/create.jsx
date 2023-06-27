import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,usePage,useForm } from '@inertiajs/react';
import { Label,TextInput,Checkbox,Button,Card } from 'flowbite-react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


export default function create() {
const{auth,units} = usePage().props
const animatedComponents = makeAnimated();
let productunits = []
units.forEach(item=>{
    let unit = { value: item.id, label: item.title }
    productunits.push(unit)
    })

const { data, setData, post, processing, errors,progress } = useForm({
    title: 'Unit',
    shortname:'',
    unit:null,
    ismultipleof:false,
    multiplier:''
});

const submit = (e) => {
    e.preventDefault();

    post(route('units.store'));
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
    <div className="mb-2 block">
      <Label
        htmlFor="Short Name"
        value="short_name"
      />
    </div>
    <TextInput
      id="shortname"
      type="text"
      placeholder="Short Name"
      required={true}
      value={data.shortname}
      onChange={(e)=>setData('shortname',e.target.value)}
    />
     <label>
      <input type="checkbox"
        defaultChecked={data.ismultipleof}
        onChange={()=>setData('ismultipleof',!data.ismultipleof)}
      />
      Add as a multiple of other unit
    </label> 
     {
        data.ismultipleof === true && <div className="flex flex-row ...">
        <div className='m-6'>1 {data.title} is =</div>
        <div className='m-6'>
        <TextInput
      id="multiplier"
      type="text"
      placeholder="Times Base Unit"
      required={true}
      value={data.multiplier}
      onChange={(e)=>setData('multiplier',e.target.value)}
    />
        </div>
        <div className='m-6'>
        <Select 
                    options={productunits}
                    components={animatedComponents}
                    onChange={(selected)=>setData('unit',selected.value)}
                    />
        </div>
      </div>
     }
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
