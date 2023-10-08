// Importar el módulo que creaste
const tecsupTareaXXX = require('./source/index');

// Usar las funciones del módulo
console.log(`==> RESULTADOS: `);
console.log(`==> Días que faltan hasta Navidad son: ${tecsupTareaXXX.daysUntilChristmas()}`);
console.log(`==> Edad segun la fecha de nacimiento indicada es : ${tecsupTareaXXX.calculateAge('2001-05-03')}`);

// Datos de ejemplo para validar un formulario
const formData = {
    name: 'Rebeca Huallpa',
    email: 'rebeca.huallpa@tecsup.edu.pe',
};

const requiredFields = ['name', 'email'];
const errors = tecsupTareaXXX.validateForm(formData, requiredFields);

if (Object.keys(errors).length === 0) {
    console.log('==> El formulario es válido');
} else {
    console.log('==> Errores en el formulario:', errors);
}
