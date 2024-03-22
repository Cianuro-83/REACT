import {
   useReactTable,
   getCoreRowModel,
   flexRender,
   getPaginationRowModel,
   getSortedRowModel,
   getFilteredRowModel,
} from '@tanstack/react-table';
import { useGetCommentsQuery } from '../../store/api/commentsApi';
import { useState } from 'react';

const SimpleTable = () => {
   const {
      data: commenti = [],
      isLoading,
      isError,
      error,
   } = useGetCommentsQuery();
   const columns = [
      {
         header: 'ID',
         accessorKey: 'id',
         footer: 'il mio ID',
      },
      {
         header: 'POST ID',
         accessorKey: 'postId',
         footer: 'il mio POST ID',
      },
      {
         header: 'NAME',
         accessorKey: 'name',
         footer: 'il mio NOME',
      },
      {
         header: 'EMAIL',
         accessorKey: 'email',
         footer: 'la mia EMAIL',
      },
   ];
   const [sorting, setSorting] = useState([]);
   const [filtering, setFiltering] = useState('');
   const [pagination, setPagination] = useState({
      pageIndex: 0,
      pageSize: 11,
   });
   const table = useReactTable({
      data: commenti,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
         sorting,
         globalFilter: filtering,
         pagination,
      },
      onSortingChange: setSorting,
      onGlobalFilterChange: setFiltering,
   });
   return (
      <div className="rfc-SimpleTable">
         <p>{isError && <span>{error.message}</span>}</p>
         <p>{isLoading && <span>Loading...</span>}</p>
         <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="cerca nella tabella"
         />
         <table>
            <thead>
               {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                     {headerGroup.headers.map((header) => (
                        <th
                           key={header.id}
                           onClick={header.column.getToggleSortingHandler()}
                        >
                           {header.isPlaceholder
                              ? null
                              : flexRender(
                                   header.column.columnDef.header,
                                   header.getContext()
                                )}
                           {
                              { asc: '🔽', desc: '🔼' }[
                                 header.column.getIsSorted() ?? null
                              ]
                           }
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody>
               {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                     {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                           {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                           )}
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
            <tfoot>
               {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                     {footerGroup.headers.map((footer) => (
                        <th key={footer.id}>
                           {flexRender(
                              footer.column.columnDef.footer,
                              footer.getContext()
                           )}
                        </th>
                     ))}
                  </tr>
               ))}
            </tfoot>
         </table>
         <button onClick={() => table.setPageIndex(0)}>PRIMA PAGINA</button>

         <button onClick={() => table.previousPage()}>PAGINA PRECEDENTE</button>

         <button onClick={() => table.nextPage()}>PAGINA SUCCESSIVA</button>

         <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            ULTIMA PAGINA
         </button>
      </div>
   );
};

export default SimpleTable;
