# Informe Practica 8

<p align="center">
    <a href="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/node.js.yml">
        <img alt="GitHub Tests" src="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/node.js.yml/badge.svg?branch=master">
    </a>  
    <a href="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/sonar-cloud.yml">
        <img alt="Sonar-Cloud Status" src="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/sonar-cloud.yml/badge.svg?branch=master">
    </a>
    <a href="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/coveralls.yml">
        <img alt="Coveralls" src="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/coveralls.yml/badge.svg?branch=master">
    </a>
</p>

## Procesamiento de notas de texto

1. La aplicación de notas deberá permitir que múltiples usuarios interactúen con ella, pero no simultáneamente.
2. Una nota estará formada, como mínimo, por un título, un cuerpo y un color (rojo, verde, azul o amarillo).
3. Cada usuario tendrá su propia lista de notas, con la que podrá llevar a cabo las siguientes operaciones: 
    * Añadir una nota
    * Eliminar una nota
    * Modificar una nota
    * Listar los titulos de las notas
    * Leer una nota
4. Un usuario solo puede interactuar con la aplicación de procesamiento de notas de texto a través de la línea de comandos. Los diferentes comandos, opciones de los mismos, así como manejadores asociados a cada uno de ellos deben gestionarse mediante el uso del paquete yargs.

## Funcionamiento del programa

El programa funciona de la siguiente forma, se introduce por la linea de comandos la funcion a emplear mediante el uso de yargs, ya sea add, modify, remove, list, read. Los argumentos que hay que introducir son los siguientes:

## add

```bash
node dist/main.js add --user="Juan" --title="Titulo" --body="Cuerpo" --color="Green"
```

Para añadir una nota, tenemos que pasar por argumentos el usuario, el titulo, el cuerpo de la nota, y el color de la nota.

## modify

```bash
node dist/main.js modify --user="Juan" --title="Titulo" --body="Cuerpo"
```

Para modificar una nota, tenemos que pasar por argumentos el usuario, el titulo, el cuerpo de la nota que se vaya a modificar.

## remove

```bash
node dist/main.js remove --user="Juan" --title="Titulo"
```

Para eliminar una nota, tenemos que pasar por argumentos el usuario y el titulo de la nota a eliminar.

## list

```bash
node dist/main.js list --user="Juan"
```

Para listar los titulos de las notas, tenemos que pasar por argumentos el usuario al cual pertenecen las notas.

## read

```bash
node dist/main.js read --user="Juan" --title="Titulo"
```

Para leer una nota, tenemos que pasar por argumentos el usuario y el titulo de la nota a leer.

---
Todo lo que se ejecute en el programa afectara a la base de datos, que se encuentra en el directorio ```src/database``` como ```users.json```.

# Herramientas Implementadas

Para la revision de codigo de la practica se hizo uso de las siguientes herramientas:

* Github Actions:
  * [Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/coveralls.yml)
  * [Coveralls](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/node.js.yml)
  * [Sonar-Cloud](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99/actions/workflows/sonar-cloud.yml)


# [Link al repositorio](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-EindhovenLion99)