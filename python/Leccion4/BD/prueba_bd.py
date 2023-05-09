import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            # Realizamos sentencias
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s'  # %s = placeholder
            id_persona = input('Digite un número para el id_persona: ')
            cursor.execute(sentencia, (id_persona,))  # de esta manera ejecutamos la sentencia
            registros = cursor.fetchone()  # Fetchone()=recuperamos todos los registros que serán una Tupla, fetchall = una lista
            print(registros)  # los registros se almacenan en un tupla
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()


# https://www.psycopg.org/docs/usage.html
