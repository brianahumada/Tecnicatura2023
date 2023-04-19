from dominio.peliculas import peliculas
from servicios.Catalogo import catalogo as cp
opcion = None

while opcion != 4:
    try:
        print('OPCIONES: ')
        print('1. Agregar Películas')
        print('2.Listar las Películas')
        print('1.Eliminar catálogo de películas')
        print('4.Salir')
        opcion = int(input('Digite una Opción de menu (1-4): '))
        if opcion == 1:
            nombrePelicula = input('Digite el nombre de la película: ')
            peliculass = peliculas(nombrePelicula)
            cp.agregar_peliculas(peliculass)
        elif opcion == 2:
            cp.listar_peliculas()
        elif opcion == 3:
            cp.eliminar_peliculas()

    except Exception as e:
        print(f'Ocurrió un error de tipo {e}')
        opcion = None
    else:
        print('Salimos del Programa')
