import React from 'react';
import { useUsersSize } from '../../hooks/useUsers'; // Ajusta la ruta
import { useExcursionsSize } from '../../hooks/useExcursions'; // Ajusta la ruta

function Estadisticas() {
  const {
    studentsSize,
    guidesSize,
    loading: usersLoading,
    error: usersError,
  } = useUsersSize();
  const {
    size,
    loading: excursionsLoading,
    error: excursionsError,
  } = useExcursionsSize();

  const loading = usersLoading || excursionsLoading;
  const error = usersError || excursionsError;

  if (loading) {
    return <p>Cargando estadísticas...</p>;
  }

  if (error) {
    return <p>Error al cargar estadísticas: {error.message}</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          {size}
        </p>
        <p>Excursiones Disponibles</p>
      </div>
      <div>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{studentsSize}</p>
        <p>Estudiantes Registrados</p>
      </div>
      <div>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{guidesSize}</p>
        <p>Guías Registrados</p>
      </div>
    </div>
  );
}

export default Estadisticas;
