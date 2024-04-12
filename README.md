# back

Pasos para descargar y ejecutar el proyecto back



1. Clonar repositorio
2. Ejecutar 
```
npm install
```
3. Ejecutar el script de la creacion de la DB 
4. Clonar el archivo __.env_example__ y renombrarlo como .env
5. Llenar las variables de entorno definidas en el .env
7. Cargar seed en la DB (esto se debe hacer una unica vez ya que los nombre de usuario es unico en la tabla users)
```
http://localhost:8081/api/users/seed
```
7. Ejecutar 
```
npm run dev
```

## Stack usado
* ExpressJs
* MySql

# Usuarios
## Estudiantes
    usuario: usuario1
    password: 1234567

    usuario: usuario2
    password: 1234567

    usuario: usuario3
    password: 1234567

    usuario: usuario4
    password: 1234567

    usuario: usuario5
    password: 1234567

    usuario: usuario6
    password: 1234567

## Moderador
    usuario: usuario7
    password: 1234567




