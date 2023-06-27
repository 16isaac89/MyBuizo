import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Head, usePage,Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'primeicons/primeicons.css';

export default function index() {
    const {auth,patients} = usePage().props
   
    
    const actionBodyTemplate = (patient) => ( 
        <div className='flex item-center gap-3 '>
        <button class="text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" type="button"
      >
            <Link href={route('patients.edit',patient.id)}>
            <i className="pi pi-pencil"></i>
            </Link>
            
            </button>
            <button class="text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
      >
            <Link href={route('patients.edit',patient.id)}>
            <i className="pi pi-trash"></i>
            </Link>
            
            </button>
            <button class="text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" type="button"
      >
            <Link href={route('patients.edit',patient.id)}>
            <i className="pi pi-eye"></i>
            </Link>
            
            </button>
            </div>
    );
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Roles</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
                <Link href={route('patients.create')}>ADD</Link>
                <div className="card">
                <DataTable value={patients} paginator rows={10} dataKey="id" filterDisplay="column">
                <Column field="identification" header="ID" style={{ minWidth: '8rem' }} />
                <Column field="firstname" header="First Name" style={{ minWidth: '6rem' }} />
                <Column field="secondname" header="Second Name" style={{ minWidth: '6rem' }} />
                <Column field="lastname" header="Last Name" style={{ minWidth: '6rem' }} />
                <Column field="dob" header="Age" style={{ minWidth: '6rem' }} />
                <Column field="address" header="Address" style={{ minWidth: '6rem' }} />
                <Column field="telephone" header="Telephone" style={{ minWidth: '6rem' }} />
                <Column field="created_at" header="Registered" style={{ minWidth: '6rem' }} />
                <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
            </DataTable>
            </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
