import psycopg2 as bd  # Esto es para poder conectarnos a Postgre

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = ('Alex', 'Rojas', 'rojasalex@gamail.com')
            cursor.execute(sentencia, valores)

            sentencia1 = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores1 = ('Juan carlos', 'Roldan', 'RoldanCarlos@gamil.com', 1)
            cursor.execute(sentencia1, valores1)

except Exception as e:
    print(f'Ocurrio un error, se hizo rollback: {e}')
finally:
    conexion.close()

print('Termina la transacción')
