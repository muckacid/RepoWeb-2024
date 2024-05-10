Este proyecto tiene como finalidad, presentar una base limpia del un servidor del
framework de express.

Este servidor contiene 2 rutas establecidas y declaradas con el modulo de Router de express.

En primer lugar para generar el package.json del proyecto utilizaremos la instuccion en consola:
-> npm init --yes
![alt text](README.img/init-yess.png)

Para este ejemplo solo utilizaremos el paquete de express desde npm,
utilizando la instruccion:
-> npm install express
![alt text](README.img/express.png)

Agregar instruccion de arranque del servidor de node en el package.jason:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
},
![alt text](README.img/package-init.png)

Al agregar esta instruccion en los scripts del proyecto, nos permitira
iniciar un servidor escribiendo la siguiente instruccion, en la terminal
situedad en la raiz del proyecto:
-> npm run start

Probablemente si llegaste hasta este punto ocurrio un error:
![alt text](README.img/error-start.png)
Esto es por que el archivo index.js no esta creado, debes crearlo.
En el ide de visual studio code, en la ventana desplegable del proyecto,
crearemos una carpeta la cual contendra todo el desarrollo del proyecto,
a este directorio le llamaremos src y hasta este punto su proyecto deberia verse
asi:
![alt text](README.img/src-index.png)
Dentro de esta carpera crearemos nuestro archivo de arranque, el entry-point,
el cual podemos declarar en el fichero de configuraciones de nuestra aplicacion.
![alt text](README.img/entry-point.png)

De aqui en adelante el se tranforma todo en desarrollo dentro de src,
puesto que el archivo index pasa a ser el arranque de nuestro servidor
generado con node.

El proyecto deberia verse algo asi:
![alt text](README.img/servidor.png)
![alt text](README.img/archivo-arranque.png)

Para levantar el servicio es necesario utilizar la siguiente instruccion
-> npm run start
![alt text](README.img/servidor-run.png)
