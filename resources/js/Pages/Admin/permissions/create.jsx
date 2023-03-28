import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,usePage,useForm } from '@inertiajs/react';
import { Label,TextInput,Checkbox,Button,Card } from 'flowbite-react';

export default function create() {
const{auth} = usePage().props

const { data, setData, post, processing, errors } = useForm({
    title: '',
});

const submit = (e) => {
    e.preventDefault();

    post(route('permissions.store'));
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
