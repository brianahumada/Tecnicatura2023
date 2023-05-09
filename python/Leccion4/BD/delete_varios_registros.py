import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los número de registro a eliminar (separados por coma): ')
            valores = (tuple(entrada.split(',')),)
            cursor.execute(sentencia, valores)  # de esta manera ejecutamos la sentencia
            registrosEliminados = cursor.rowcount  # rowcount = devuelve el número de filas que fue afectada
            print(f'Los registros Eliminados son: {registrosEliminados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
