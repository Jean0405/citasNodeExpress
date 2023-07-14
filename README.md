# CitasNodeExpress

Este es un proyecto backend desarrollado con Node.js, Express y MySQL para gestionar citas médicas. Proporciona una API que permite obtener y manipular registros relacionados con citas, pacientes y médicos en una base de datos.

## Tablas SQL

El proyecto utiliza las siguientes tablas SQL:

- **acudientes**: Almacena información sobre los acudientes de los pacientes.
- **cita**: Contiene los datos de las citas médicas.
- **consultorio**: Registra los consultorios médicos disponibles.
- **especialidad**: Guarda la información sobre las especialidades médicas.
- **estado_cita**: Define los posibles estados de una cita médica.
- **genero**: Contiene los géneros disponibles.
- **medico**: Almacena los datos de los médicos.
- **tipo_documento**: Define los diferentes tipos de documentos utilizados.
- **usuario**: Registra los usuarios del sistema.

## Instalación

Para utilizar este proyecto, siga los pasos a continuación:

1. Clona el repositorio de GitHub:

```bash
git clone https://github.com/Jean0405/citasNodeExpress.git
```

2. Instala las dependencias del proyecto. Asegúrate de tener [Node.js](https://nodejs.org) instalado. Navega hasta la carpeta raíz del proyecto y ejecuta el siguiente comando:

```bash
npm install
```

Esto iniciará el servidor Node.js utilizando Nodemon para reiniciar automáticamente el servidor cuando se realicen cambios en el código.

5. El servidor estará disponible en `http://localhost:puerto`, donde `puerto` es el número de puerto especificado en el archivo `.env`.

## Uso

Una vez que el servidor esté en funcionamiento, puedes utilizar las siguientes rutas para acceder a los datos:

- **GET /citas**: Obtiene todas las citas médicas.
- **GET /consultorias**: Obtiene todos los consultorios médicos.
- **GET /medicos**: Obtiene todos los médicos registrados.
- **GET /usuarios**: Obtiene todos los usuarios del sistema.

* Esta rutas son las especificas para citas, hay que poner las extensiones del URL para especificar los datos a dar

- **GET /citas/?orden=:order**
- **GET /citas/citas_genero/?genero=:gen**
- **GET /citas/?citas_estado=:estado**

* Esta rutas son las especificas para consultorias, hay que poner las extensiones del URL para especificar los datos a dar

- **GET /consultias/?id_usuario=:usu_id**
- **GET /consultorias/consultorios_citas/?id_usuario=:usu_id**

* Esta rutas son las especificas para medicos, hay que poner las extensiones del URL para especificar los datos a dar

- **GET /medicos/?med_especialidad=:especialidad**
- **GET /medicos/?med_id=:med_id**
- **GET /medicos/medicos_consultorios**
- **GET /medicos//medico_citas/?med_id=:med_id**

* Esta rutas son las especificas para usuarios o pacientes, hay que poner las extensiones del URL para especificar los datos a dar

- **GET /pacientes/?usuario_id=:usu_id**

Puedes utilizar herramientas como [Thunder CLient](https://www.thunderclient.com/) para enviar solicitudes HTTP a estas rutas y obtener los resultados correspondientes.

## Autor

👤 **Keanon Jeanpierre Angarita Olarte**
👤 [@Jean0405](https://github.com/Jean0405)
