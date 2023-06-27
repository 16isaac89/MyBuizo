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
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
</div>






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




      
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<button onClick={generatePdf} type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pdf" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
  PDF
</button>
<button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="excel" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
  <CSVLink data={csvData} headers={csvHeaders}>Export to CSV</CSVLink>
</button>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Action
                </th> */}
            </tr>
        </thead>
        <tbody>
        {currentData.map(({ id, title }) => (
            <tr key={id} class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">
                    {id}
                </td>
                <td class="px-6 py-4">
                    {title}
                </td>
                {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
            </tr>
 ))}
        </tbody>
    </table>
</div>

    </div>
    );
}
