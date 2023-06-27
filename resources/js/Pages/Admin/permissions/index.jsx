import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Head, usePage,Link } from '@inertiajs/react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Datatable from '../../../Components/Datatable'

export default function index() {
  let tableheaders = [
    'ID','Title'
  ]
    const {auth,permissions} = usePage().props
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(permissions);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const handleSearch = e => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = permissions.filter(({ id,title }) => title.toLowerCase().includes(value.toLowerCase()) || parseInt(id) === parseInt(value));
        setFilteredData(filtered);
      };

      const handlePagination = page => {
        setCurrentPage(page);
      };
      
    
      const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
      };
    
      const pageCount = Math.ceil(filteredData.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentData = filteredData.slice(startIndex, endIndex);

      const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const csvHeaders = [
    { label: 'ID', key: 'id' },
    { label: 'Title', key: 'title' },
    
  ];

  const csvData = currentData.map(({ id, title }) => ({
    id,
    title
  }));

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['ID', 'Title']],
      body: currentData.map(({ id,title }) => [id,title])
    });
    doc.save('table.pdf');
  };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Permissions</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <Link href={route('permissions.create')}>ADD</Link>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                  <Datatable 
                  tableheaders={tableheaders} 
                  currentData={currentData} 
                  generatePdf={generatePdf} 
                  csvData={csvData}
                  csvHeaders={csvHeaders}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                  handlePagination={handlePagination}
                  currentPage={currentPage}
                  pageNumbers={pageNumbers}
                  pageCount={pageCount}
                  handleSearch={handleSearch}
                  searchTerm={searchTerm}
                  />
            </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
