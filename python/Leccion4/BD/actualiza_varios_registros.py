import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            # Realizamos sentencias
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s' #update= actualizar set=columnas modificar where= filtrar
            valores = (
                ('lucia', 'perez', 'rcarlos@mail.com', 4),
                ('Romina', 'Ayala', 'ayalar@mail.com', 5)
            )
            cursor.executemany(sentencia, valores)  # de esta manera ejecutamos la sentencia
            registrosActualizados = cursor.rowcount  # rowcount = devuelve el número de filas que fue afectada
            print(f'Los registros Actualizados son: {registrosActualizados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
