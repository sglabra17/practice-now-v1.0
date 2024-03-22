// predefined headers
const levelHeaders = {
    'basico' : [' - Nivel Básico',
    'Empieza a practicar inglés con ejercicios de gramática de nivel básico.'],
};

// predefined questions
const questions = {};

// get url value
let nivel = location.search.split("=")[1];
console.log(nivel);

// variables
const title    = document.querySelector('#subject-title');
const subTitle = document.querySelector('#subject-subtitle');

// Dynamic Titles
title.innerHTML    += levelHeaders[nivel][0];
subTitle.innerHTML =  levelHeaders[nivel][1];

// Dynamic Content
