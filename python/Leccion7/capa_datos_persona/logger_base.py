
import logging as log

# docs.python.org/3/howto/logging.html
# Llamamos una configuracion básica
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ])

# configuracion basica
if __name__ == '__main__':
    log.debug('mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('mensaje a nivel error')
    log.critical('Mensaje a nivel critical')
