import psycopg2 as bd  # Esto es para poder conectarnos a Postgre

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    conexion.autocommit = False  # esto no deveria estar ya que su estado es false, Inicia
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Jorge', 'Prol567891234', 'jprol@gamail.com')
    cursor.execute(sentencia, valores)

    sentencia1 = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores1 = ('Juan carlos', 'Juarez', 'jcjuarez@gamil.com', 1)
    cursor.execute(sentencia1, valores1)

    conexion.commit()  # Hacemos el commit manualmente, SE CIERRA
    print('Termina la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, se hizo rollback: {e}')
finally:
    conexion.close()
