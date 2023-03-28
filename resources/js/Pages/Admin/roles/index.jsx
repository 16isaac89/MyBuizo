import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Head, usePage,Link } from '@inertiajs/react';

export default function index() {
    const {auth,roles} = usePage().props
    const permissionslist = (item) => {
        console.log(item.permissions)
        return<ul className="list-none hover:list-disc">
            {item.permissions.map(permission =>{
                return <li key={permission.id}>{permission.title}</li>
                })
                }
            </ul> 
    };
    const actionslist = (item) => {
        return(
            <div>
                <Link 
                 className="px-3 py-2 mr-2 rounded text-white text-sm 
                 font-bold whitespace-no-wrap 
                 bg-blue-600 hover:bg-blue-800"
                href={route('roles.edit',item.id)}>
                    Edit</Link>
            </div>
        )
        
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Roles</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('roles.create')}>ADD</Link>
                <div className="card">
                <DataTable value={roles} paginator rows={10} dataKey="id" filterDisplay="row">
                <Column field="id" header="ID" style={{ minWidth: '12rem' }} />
                <Column field="title" header="Title" style={{ minWidth: '12rem' }} />
                <Column field="permissions" header="Permissions" body={permissionslist} style={{ minWidth: '12rem' }} />
                <Column field="actions" header="Actions" body={actionslist} style={{ minWidth: '12rem' }} />
            </DataTable>
            </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
