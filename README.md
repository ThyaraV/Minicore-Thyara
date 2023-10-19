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

![image](https://github.com/ThyaraV/Minicore-Thyara/assets/96449161/44958ce0-a49f-4131-a2e3-06b9e6482ab1)

![image](https://github.com/ThyaraV/Minicore-Thyara/assets/96449161/ed72c0b4-3694-4577-9e8e-74de53968748)

Este diagrama representa la arquitectura básica del minicore. El frontend está construido utilizando la biblioteca React y consta de dos componentes principales: **buscador.jsx** y **App.js**. El primero, **buscador.jsx**, se encarga de la interfaz de usuario, permitiendo a los usuarios ingresar un rango de fechas y realizar búsquedas. Cuando los usuarios hacen clic en el botón "Buscar", este componente inicia una solicitud HTTP al backend. Por otro lado, **App.js** administra las rutas de la aplicación y asegura que el componente Buscador se muestre en la raíz de la aplicación.

El backend, desarrollado en Node.js con Express, se encarga de gestionar las solicitudes HTTP entrantes y conectarse a una base de datos MongoDB. El archivo principal, **server.js**, configura el servidor Express y define las rutas de la API. Cuando se recibe una solicitud HTTP desde **buscador.jsx**, el servidor procesa la información de entrada y realiza una consulta a la base de datos MongoDB para buscar el producto más vendido dentro del rango de fechas especificado. En resumen, esta aplicación sigue un modelo cliente-servidor, donde el frontend (cliente) interactúa con el backend y la base de datos para proporcionar a los usuarios información sobre el producto más vendido, el total de ventas y el nombre del vendedor en función del rango de fechas especificado.

## Deploy del proyecto
Backend:https://mini-core-backend.vercel.app/
Frontend:https://mini-core-frontend.vercel.app/

Adjunto imagen del resultado del deploy:
![image](https://github.com/ThyaraV/Minicore-Thyara/assets/96449161/d686d4d6-1e38-454c-a491-0f8c8ec5fcfd)
