// predefined headers
const levelHeaders = {
    'basico' : [' - Nivel Básico',
    ' '],

    'intermedio': [' - Nivel Intermedio',
    ' '],

    'avanzado' :  [' - Nivel Avanzado',
    '  ']
};

// get url value
let nivel = location.search.split("=")[1];
console.log(nivel);