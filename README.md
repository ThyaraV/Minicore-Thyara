# Minicore-Thyara
Minicore sobre el producto más vendido usando MERN, con Node como backend, React como frontend y Mongo Atlas para la base de datos.
## Descripción del Minicore
Se tienen dos tablas, una de vendedores y otra de ventas, un vendedor puede tener varias ventas. Las ventas tienen una fecha y un monto, que son los elementos principales que se utilizan para la lógica del proyecto.

El objetivo es encontrar en un rango de fechas el producto más vendido de todas las ventas realizadas por los vendedores y así, se muestra la información de dicho producto, su total y de la persona que logró vender dicho producto.
![image](https://github.com/ThyaraV/Minicore-Thyara/assets/96449161/daef0d63-99bc-4355-a505-14a3d5b1fc92)

## Ejecución del proyecto
1.Para instalar las dependencias en el backend y frontend se debe ejecutar en VS el comando

### `npm install`

2.Para ejecutar el backend desde VS, de debe ingresar en la terminal el comando

### `yarn start`

3.Para ejecutar el frontend desde VS, se debe ingresar en la terminal el comando

### `npm start`

## Arquitectura del Minicore
![image](https://github.com/ThyaraV/Minicore-Thyara/assets/96449161/ed72c0b4-3694-4577-9e8e-74de53968748)

Este diagrama representa la arquitectura básica del minicore. El frontend está construido con React y consiste en dos componentes principales: **buscador.jsx** y **App.js** . **buscador.jsx**  maneja la interfaz de usuario para ingresar fechas y mostrar el resultado, y realiza solicitudes HTTP al backend. **App.js** se encarga de enrutar y renderizar los componentes.

El backend está construido en Node.js utilizando Express y se comunica con una base de datos MongoDB. **server.js** es el punto de entrada del backend y maneja las solicitudes HTTP entrantes. Realiza consultas a la base de datos MongoDB para buscar el producto más vendido en un rango de fechas y proporciona una respuesta al frontend.

