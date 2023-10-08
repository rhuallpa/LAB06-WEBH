# Módulo tecsup-2023-huallpacenteno

Este módulo contiene varias funciones útiles para cálculos de fecha y validación de formularios. Puedes instalarlo y utilizarlo en tu proyecto de Node.js siguiendo estos pasos:

## Instalación

Antes de comenzar, asegúrate de que tienes Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

1. **Inicializa tu proyecto con npm**

   Si aún no has inicializado tu proyecto con npm, puedes hacerlo ejecutando el siguiente comando en la carpeta raíz de tu proyecto:

   ```shell
   npm init

Esto te guiará a través de la creación de un archivo package.json donde se registrarán las dependencias de tu proyecto.

2. **Instala el módulo tecsup-2023-huallpacenteno
Una vez que hayas inicializado tu proyecto, puedes instalar el módulo tecsup-2023-huallpacenteno con el siguiente comando:


npm install tecsup-2017-huallpacenteno
3. **Instala la dependencia Underscore (si no lo has hecho ya)
Asegúrate de que tengas la librería Underscore instalada como dependencia en tu proyecto. Si aún no la tienes, puedes instalarla con este comando:


npm install underscore
Ahora estarás listo para utilizar las funciones proporcionadas por el módulo tecsup-2017-huallpacenteno en tu aplicación Node.js.

Uso
**Cálculo de días hasta Navidad
Puedes utilizar la función daysUntilChristmas para determinar la cantidad de días que faltan para Navidad. A continuación se muestra un ejemplo de cómo hacerlo:


const huallpacenteno = require('tecsup-2017-huallpacenteno');

const diasHastaNavidad = huallpacenteno.daysUntilChristmas();
console.log(`Días hasta Navidad: ${diasHastaNavidad}`);
**Cálculo de la edad
La función calculateAge te permite calcular la edad de una persona en función de su fecha de nacimiento. Aquí tienes un ejemplo de cómo usarla:


const huallpacenteno = require('tecsup-2017-huallpacenteno');

const fechaDeNacimiento = '1990-05-15';
const edad = huallpacenteno.calculateAge(fechaDeNacimiento);
console.log(`Edad: ${edad}`);
Validación de formularios
El módulo proporciona la función validateForm para validar datos de formularios. Esta función toma dos argumentos: un objeto con los datos del formulario y una matriz de campos obligatorios. Devuelve un objeto con los errores encontrados, si los hay.

Aquí hay un ejemplo de cómo utilizar validateForm:


const huallpacenteno = require('tecsup-2017-huallpacenteno');

const formData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
};

const requiredFields = ['name', 'email'];
const errors = huallpacenteno.validateForm(formData, requiredFields);

if (Object.keys(errors).length === 0) {
    console.log('El formulario es válido.');
} else {
    console.log('Errores en el formulario:', errors);
}
**Contribución
Si deseas contribuir a este módulo, puedes hacerlo enviando solicitudes de extracción o informando problemas en el [repositorio de GitHub](URL del Repositorio).
