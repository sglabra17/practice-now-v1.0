// predefined headers
const levelHeaders = {
    'basico' : [' - Nivel Básico',
    'Empieza a practicar inglés con ejercicios de gramática de nivel básico.'],
};

// predefined questions
const questions = [
    {
        num      : 1,
        question : 'Who is Kate? Kate is my friend. ___ is a teacher.',
        options  : ['Her','He','She','His'],
        answer   : 'She'
    }
];

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
        inRadio.setAttribute('id',op.toLocaleLowerCase());
        inRadio.name    = `answer${question['num']}`;
        inRadio.value   = op.toLocaleLowerCase();
        inRadio.checked = question['options'].indexOf(op) === 0 ? true : false;
        awrCtnr.append(inRadio);

        // create label
        const radioLabel = document.createElement('label');
        radioLabel.setAttribute('for',`${op.toLowerCase}`);
        radioLabel.innerText = op;
        awrCtnr.append(radioLabel);
    }
}