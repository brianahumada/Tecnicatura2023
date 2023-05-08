import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

# Realizamos sentencias
cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia)  # de esta manera ejecutamos la sentencia
registros = cursor.fetchall()  # recuperamos todos los registros que serán una lista
print(registros)  # los registros se almacenan en un tupla

cursor.close()
conexion.close()
