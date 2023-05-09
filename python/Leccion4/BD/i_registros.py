import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            # Realizamos sentencias
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'  # %s = placeholder
            valores = ('Carlos', 'Lara', 'Claraqgmail.com')
            cursor.execute(sentencia, valores)  # de esta manera ejecutamos la sentencia
            # conexion.commit() # esto se utiliza para guardar los cambios pero el with ya lo esta haciendo
            registrosInsertados = cursor.rowcount  # rowcount = devuelve el número de filas que fue afectada
            print(f'Los registros insertados son: {registrosInsertados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
