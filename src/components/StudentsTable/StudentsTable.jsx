import React from 'react';
import style from './StudentsTable.module.css';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useUsersByRole } from '../../hooks/useUsers';

const StudentsTable = () => {
  const { users, loading, error } = useUsersByRole('Estudiante');

  // Definición de columnas
  const columns = React.useMemo(
    () => [
      {
        header: 'Nombre',
        accessorKey: 'name',
      },
      {
        header: 'Correo Electrónico',
        accessorKey: 'email',
      },
      {
        header: 'Teléfono',
        accessorKey: 'phone',
      },
      {
        header: 'Rol',
        accessorKey: 'role',
      },
    ],
    []
  );

  // Configuración de la tabla
  const table = useReactTable({
    columns,
    data: users,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p>Cargando estudiantes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table className={style.studentTable}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{
                  padding: '12px',
                  borderBottom: '2px solid #e0e0e0',
                  backgroundColor: '#f8f9fa',
                  textAlign: 'left',
                  fontWeight: 600,
                  color: '#2d3436',
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                style={{
                  padding: '12px',
                  borderBottom: '1px solid #e0e0e0',
                  backgroundColor: '#ffffff',
                  color: '#636e72',
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
