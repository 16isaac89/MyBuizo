import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Head, usePage,Link } from '@inertiajs/react';

export default function index() {
    const {auth,productbrands} = usePage().props
  const imageBodyTemplate = (item) =>{
return <img src={item.media[0]?.original_url} alt={item.title} className='w-6rem shadow-2 border-round'/>
   }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Permissions</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('productbrands.create')}>ADD</Link>
                <div className="card">
                <DataTable value={productbrands} paginator rows={10} dataKey="id" filterDisplay="row">
                <Column field="id" header="ID" style={{ minWidth: '12rem' }} />
                <Column field="title" header="Title" style={{ minWidth: '12rem' }} />
                <Column field="categoryimage" header="Image" body={imageBodyTemplate} style={{ minWidth: '12rem' }} />
            </DataTable>
            </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
