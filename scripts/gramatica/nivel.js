// import { qnsObj } from "./questions.js";

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
    qnTag.id = `qp${question['num']}`;
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
        inRadio.setAttribute('id',`${op}${question['num']}`);
        inRadio.name    = `answer${question['num']}`;
        inRadio.value   = op;
        inRadio.checked = question['options'].indexOf(op) === 0 ? true : false;
        awrCtnr.append(inRadio);

        // create label
        const radioLabel = document.createElement('label');
        radioLabel.setAttribute('for',`${op}${question['num']}`);
        radioLabel.innerText = op;
        awrCtnr.append(radioLabel);
    }
}

// create solve button
const btnSolve       = document.createElement('a');
btnSolve.textContent = 'Resolver';
btnSolve.href        = '#qns-ctnr';
btnSolve.classList.add('button-solve');
qnsCtnr.append(btnSolve);


// Solve Button - Event
const qnsHdr = document.querySelector('#qns-hdr');
btnSolve.addEventListener('click',()=>{
    let correctas = 0;
    qnsHdr.innerText = 'Resultado:';

    // Validate Answers
    for (const question of questions) {
        const pTag        = document.querySelector(`#qp${question['num']}`);
        const correct     = question['answer'];
        const tagCorrect  = document.querySelector(`#${correct}${question['num']}`);
        const isCorrect   = tagCorrect.checked;
        
        if(isCorrect){
            correctas++;
            pTag.innerHTML = `<span class="span-resC">Correcta</span>${pTag.innerText}`;
        }else{
            pTag.innerHTML = `<span class="span-resI">Incorrecta</span>${pTag.innerText}`;
        }
    }

    qnsHdr.innerHTML = `${qnsHdr.innerText}<span class="span-finalRes">${correctas} de ${questions.length}</span>`;
    qnsCtnr.removeChild(btnSolve);

    // create solve button
    const btnRetry       = document.createElement('a');
    btnRetry.textContent = 'Reintentar';
    btnRetry.classList.add('button-solve');
    btnRetry.href = `gramatica.html?lvl=${nivel}`;
    qnsCtnr.append(btnRetry);
});


