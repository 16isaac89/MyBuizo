import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Head, usePage,Link } from '@inertiajs/react';
import Add from './modals/Add';
import { Button } from 'flowbite-react';
import {useForm} from '@inertiajs/react';
import Modal from '@/Components/Modal';

export default function index() {
    const { data, setData } = useForm({
        modal:false
     });
     const openModal = () =>{
        setData('modal',true)
            }
            const closeModal = () =>{
                setData('modal',false)
            }
   
  
    const {auth,variations} = usePage().props
  
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Permissions</h2>}
        >
            <Head title="Profile" />
           
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Button onClick={openModal}>ADD</Button>
                    <Modal show={data.modal} onClick={closeModal} title={'Add Product Variation'}>

                    <Button onClick={closeModal}>Close</Button>
                    </Modal>


                <div className="card">
                <DataTable value={variations} paginator rows={10} dataKey="id" filterDisplay="row">
                <Column field="id" header="ID" style={{ minWidth: '12rem' }} />
                <Column field="variation_name" header="Title" style={{ minWidth: '12rem' }} />
                
            </DataTable>
            </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
