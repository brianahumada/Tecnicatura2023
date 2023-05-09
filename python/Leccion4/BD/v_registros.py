import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            # Realizamos sentencias
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'
            entrada = input('Digite el id_persona a buscar (separados por coma): ')
            llavesPrimarias = (tuple(entrada.split(', ')),)
            cursor.execute(sentencia, llavesPrimarias)  # de esta manera ejecutamos la sentencia
            registros = cursor.fetchall()  # Fetchone()=recuperamos todos los registros que serán una Tupla, fetchall = una lista
            for registro in registros:
                print(registro)  # los registros se almacenan en un tupla

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
