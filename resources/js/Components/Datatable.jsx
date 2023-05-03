import { CSVLink } from 'react-csv';
export default function Datatable({ tableheaders,currentData,generatePdf,csvData,csvHeaders,handlePrevPage,handleNextPage,handlePagination,currentPage,pageNumbers,pageCount,handleSearch,searchTerm}) {
    return (
        <div className='container flex justify-center mx-auto'>
        <div className='flex flex-col'>
        <div className='w-full'>
        <div className='border-b border-gray-200 shadow'>
        <div>
        <CSVLink data={csvData} headers={csvHeaders}>Export to CSV</CSVLink>
        <button onClick={generatePdf}>Export to PDF</button>
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by name" />
        </div>
        <table className='min-w-full divide-y divide-green-400 dark:divide-gray-700'>
      <thead>
        <tr>
        {tableheaders.map((item) => (
           <th key={item} className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{item}</th>
        ))}
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
        {currentData.map(({ id, title }) => (
          <tr key={id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{title}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <button
                className={currentPage === number ? 'active' : ''}
                onClick={() => handlePagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleNextPage} disabled={currentPage === pageCount}>Next</button>
      </div>
      </div>
      </div>
      </div>
    </div>
    );
}
