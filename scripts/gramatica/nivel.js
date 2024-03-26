import { qnsObj } from "./questions.js";

// predefined headers
const levelHeaders = {
    'basico' : [' - Nivel Básico',
    'Empieza a practicar inglés con ejercicios de gramática de nivel básico.'],
};

// get url value
let nivel = location.search.split("=")[1];
console.log(nivel);

// HTML references - Headers
const title    = document.querySelector('#subject-title');
const subTitle = document.querySelector('#subject-subtitle');
// HTML references - Questions
const qnsCtnr  = document.querySelector('#qns-ctnr');

// Dynamic Titles
title.innerHTML    += levelHeaders[nivel][0];
subTitle.innerHTML =  levelHeaders[nivel][1];


// Dynamic Content
const questions = qnsObj[nivel];
for (const question of questions) {
    // Create <div> question container
    const qCtnr = document.createElement('div');
    qCtnr.classList.add('question-ctnr');
    qnsCtnr.append(qCtnr);
    
    // Create <p> with No. of Question
    const qNumTag  = document.createElement('p');
    qNumTag.classList.add('question-num');
    qNumTag.innerText = `${question['num']} de ${questions.length}`;
    qCtnr.append(qNumTag);

    // Create <p> with Question Text
    const qnTag     = document.createElement('p');
    qnTag.innerText = `${question['question']}`;
    qCtnr.append(qnTag);

    // Create <div> answers container
    const ansCtnr = document.createElement('div');
    ansCtnr.classList.add('answers-ctnr');
    qCtnr.append(ansCtnr);

    // Create answers
    for (const op of question['options']) {
        // create answer container
        const awrCtnr = document.createElement('div');
        awrCtnr.classList.add('answer-ctnr');
        ansCtnr.append(awrCtnr);

        // create radio button
        const inRadio = document.createElement('input');
        inRadio.type  = 'radio';
        inRadio.setAttribute('id',op.toLowerCase());
        inRadio.name    = `answer${question['num']}`;
        inRadio.value   = op.toLowerCase();
        inRadio.checked = question['options'].indexOf(op) === 0 ? true : false;
        awrCtnr.append(inRadio);

        // create label
        const radioLabel = document.createElement('label');
        radioLabel.setAttribute('for',`${op.toLowerCase()}`);
        radioLabel.innerText = op;
        awrCtnr.append(radioLabel);
    }
}

// create solve button
const btnSolve = document.createElement('button');
btnSolve.textContent = 'Resolver';
btnSolve.classList.add('button-solve');
qnsCtnr.append(btnSolve);


// Validate Answers
