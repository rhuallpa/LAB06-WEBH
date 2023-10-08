const validator = require('validator');

// Función para calcular los días hasta Navidad
function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // 11 representa diciembre
    if (today > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const timeUntilChristmas = christmas - today;
    const daysUntilChristmas = Math.ceil(timeUntilChristmas / (1000 * 60 * 60 * 24));
    return daysUntilChristmas;
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

// Función para validar formularios
function validateForm(formData, requiredFields) {
    const errors = {};

    requiredFields.forEach((field) => {
        if (!formData[field]) {
            errors[field] = 'Campo obligatorio';
        } else {
            // Validar campos específicos, por ejemplo, correo electrónico
            if (field === 'email' && !validator.isEmail(formData[field])) {
                errors[field] = 'Correo electrónico inválido';
            }
            // Agrega más validaciones según sea necesario
        }
    });

    return errors;
}

module.exports = { daysUntilChristmas, calculateAge, validateForm };
