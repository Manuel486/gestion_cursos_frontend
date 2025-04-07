
# Proyecto de Gestión de Cursos en Next.js

Este proyecto es una plataforma de gestión de cursos desarrollada con **Next.js**. Permite a los usuarios gestionar cursos, incluyendo su creación, edición y eliminación. La interfaz está construida utilizando React Hook Form para la gestión de formularios y ShadCN para los componentes de UI.

## Aporte de la IA
Este proyecto ha utilizado IA para los siguientes aspectos:

- **Generación de documentación**: La IA ayudó a crear la estructura inicial del archivo `README.md`, facilitando la documentación del proyecto de manera eficiente.
- **Generación de datos**: Se utiliza IA para generar datos de prueba que permiten simular el entorno de producción, ayudando en el desarrollo y validación de funcionalidades.
- **Análisis de problemas de compatibilidad y logs**: La IA también se emplea para entender problemas de compatibilidad y analizar los logs generados durante la ejecución del proyecto, lo que facilita la resolución de


## Acceso al Proyecto

Existen dos formas de acceder al proyecto:

### 1. Acceder a la versión desplegada

Si prefieres acceder al proyecto ya desplegado, puedes hacerlo a través del siguiente enlace:

> **[Enlace al proyecto desplegado](https://gestioncursos.netlify.app/courses)**


### 2. Clonar el proyecto y correrlo localmente

Si prefieres ejecutar el proyecto en tu máquina local, sigue estos pasos:

#### Requisitos previos

- Tener **Node.js** instalado en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- Tener **npm** (Node Package Manager) instalado. npm se instala automáticamente con Node.js.

#### Pasos para clonar y ejecutar el proyecto

1. **Clonar el repositorio**

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Manuel486/gestion_cursos_frontend.git
   ```

2. **Instalar dependencias**

   Navega a la carpeta del proyecto clonado:

   ```bash
   cd gestion-cursos-backend
   ```

   Luego, instala las dependencias necesarias utilizando npm:

   ```bash
   npm install
   ```

3. **Ejecutar el proyecto localmente**

   Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor localmente en `http://localhost:3000`.

4. **Acceder al proyecto**

   Abre tu navegador web y visita la siguiente URL:

   ```bash
   http://localhost:3000
   ```

   Ahora podrás interactuar con la plataforma de gestión de cursos en tu máquina local.

## Características

- **Creación de cursos**: Los administradores pueden crear nuevos cursos especificando detalles como el nombre, descripción, fechas de inicio y fin, y el estado del curso (activo o inactivo).
- **Edición de cursos**: Los usuarios pueden editar los cursos existentes para actualizar su información.
- **Eliminación de cursos**: Los cursos pueden ser eliminados de la plataforma.
- **Uso de React Hook Form**: El formulario de creación y edición de cursos está gestionado con React Hook Form y validaciones usando Zod.
- **Interfaz de usuario con ShadCN**: La UI se construye usando componentes de ShadCN para un diseño atractivo y funcional.

## Instalación de Dependencias

Este proyecto utiliza las siguientes dependencias principales:

- **Next.js**: Framework de React para la creación de aplicaciones web.
- **React Hook Form**: Librería para la gestión de formularios.
- **ShadCN**: Biblioteca de componentes de UI.
- **Axios**: Cliente HTTP para realizar peticiones al backend.
- **Zod**: Librería de validación para los formularios.

## Estructura de Carpetas

La estructura básica de carpetas del proyecto es la siguiente:

```
/gestion-cursos-nextjs
│
├── /actions          # Lógica para manejar las acciones relacionadas con los cursos.
├── /app              # Configuración y estructura de la aplicación Next.js.
├── /components       # Componentes reutilizables como formularios y tablas.
├── /lib              # Funciones y utilidades auxiliares del proyecto.
├── /providers        # Proveedores de contexto para la gestión global del estado.
├── /shared           # Componentes o funciones compartidas en todo el proyecto.
├── /public           # Archivos estáticos como imágenes.
├── /utils            # Funciones utilitarias.
│
├── package.json      # Dependencias y scripts del proyecto.
└── README.md         # Este archivo.
```

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu característica o corrección.
3. Realiza tus cambios y haz un commit.
4. Abre un pull request describiendo tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un *issue* en el repositorio o contactarme.
