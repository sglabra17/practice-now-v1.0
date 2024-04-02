// predefined headers
const levelHeaders = {
    'basico' : [' - Nivel Básico',
    'Ejercicios de compresión lectora orientados a usuarios con nivel principiante del idioma.'],

    'intermedio': [' - Nivel Intermedio',
    'Los siguientes ejercicios son recomendados para un nivel B1 de inglés.'],

    'avanzado' :  [' - Nivel Avanzado',
    'Lecturas recomendadas para un nivel B2 / C1 de inglés.']
};

// get url value
let nivel = location.search.split("=")[1];
console.log(nivel);

// HTML references - Headers
const title    = document.querySelector('#subject-title');
const subTitle = document.querySelector('#subject-subtitle');
const rdngOpts = document.querySelector('#rdngOpts-ctnr');
// HTML references - Questions
const qnsCtnr  = document.querySelector('#qns-ctnr');

// Dynamic Titles
title.innerHTML    += levelHeaders[nivel][0];
subTitle.innerHTML =  levelHeaders[nivel][1];

// Chips : reading options 
const readingsObjArr = readingsObj[nivel];

for (const lectura of readingsObjArr) {
    const rdngOptBtn      = document.createElement('button');
    const rdngOptBtnClass = 'reading-option';
    const activeBtnClass  = 'rop-active';
    const isFirst         = lectura['rdngId'] === 1;
    rdngOptBtn.id         = `btn-${lectura['rdngId']}`;
    rdngOptBtn.classList.add(rdngOptBtnClass,isFirst ? activeBtnClass : null);
    rdngOptBtn.innerText = `Lectura ${lectura['rdngId']}`;

    rdngOpts.append(rdngOptBtn);
}

// Chips, reading options : Events
const rdngBtnsArray = rdngOpts.children;

for (const chip of rdngBtnsArray) {
    chip.addEventListener('click',()=>{
        const chipIndx = chip.id.split('-')[1];
        
        for (const it of rdngBtnsArray) {
            const itIndx = it.id.split('-')[1];
            if(!(itIndx===chipIndx)){
                it.className = 'reading-option';
            }else{
                it.className = 'reading-option rop-active';
            }
        }
    });
}












/*

// Dynamic content
// Reading Container
const rdingCtnr = document.createElement('div');
rdingCtnr.classList.add('reading-ctnr');
qnsCtnr.append(rdingCtnr);

// reading title
const rdingTitle     = document.createElement('p');
rdingTitle.innerText = readingsObj[nivel]['title'];
rdingCtnr.append(rdingTitle);

// reading content - paragraphs
const rdingTxt = document.createElement('div');
rdingTxt.classList.add('reading');
rdingCtnr.append(rdingTxt);

// add text to - rdingTxt
rdingTxt.innerHTML = readingsObj[nivel]['inrHtml'];

// create another form header
const secondHdr = document.createElement('p');
secondHdr.id = 'scndHdr';
secondHdr.classList.add('formHeader');
secondHdr.innerText = 'Elige la respuesta correcta.';
qnsCtnr.append(secondHdr);

/** 
 * ---------------------------------------
 * QUESTIONS - Multiple Choice
 * ---------------------------------------
 */
/*
// Dynamic Content
const questions = qnsObj[nivel];
for (const question of questions) {
    const qnNum = question['num'];

    // Create <div> question container
    const qCtnr = document.createElement('div');
    qCtnr.classList.add('question-ctnr');
    qnsCtnr.append(qCtnr);
    
    // Create <p> with No. of Question
    const qNumTag  = document.createElement('p');
    qNumTag.classList.add('question-num');
    qNumTag.innerText = `${qnNum} de ${questions.length}`;
    qCtnr.append(qNumTag);

    // Create <p> with Question Text
    const qnTag     = document.createElement('p');
    qnTag.id        = `qp${qnNum}`;
    qnTag.innerText = question['question'];
    qnTag.classList.add('question-p');
    qCtnr.append(qnTag);

    // Create <div> answers container
    const ansCtnr = document.createElement('div');
    ansCtnr.classList.add('answers-ctnr');
    qCtnr.append(ansCtnr);

    // Create answers
    for (const op of question['options']) {
        const indx = question['options'].indexOf(op);

        // create answer container
        const awrCtnr = document.createElement('div');
        awrCtnr.classList.add('answer-ctnr');
        ansCtnr.append(awrCtnr);

        // create radio button
        const inRadio   = document.createElement('input');
        inRadio.type    = 'radio';
        inRadio.id      = `q${qnNum}op${indx}`;
        inRadio.name    = `answer${qnNum}`;
        inRadio.value   = op;
        inRadio.checked = indx === 0 ? true : false;
        awrCtnr.append(inRadio);

        // create label
        const radioLabel = document.createElement('label');
        radioLabel.id    = `lbl-q${qnNum}-${indx}`;
        radioLabel.setAttribute('for',inRadio.id);
        radioLabel.innerText = op;
        awrCtnr.append(radioLabel);
    }
}

// create solve button
const btnSolve       = document.createElement('a');
btnSolve.textContent = 'Resolver';
btnSolve.href        = '#lastP';
btnSolve.classList.add('button-solve');
qnsCtnr.append(btnSolve);

// Solve Button - Event
const qnsHdr = document.querySelector('#qns-hdr');
btnSolve.addEventListener('click',()=>{
    let correctas = 0;
    secondHdr.innerText = 'Resultado:';

    // Validate Answers
    for (const question of questions) {
        const qNumber = question['num'];
        const pTag    = document.querySelector(`#qp${qNumber}`);
        const correct = question['answer'];
        let radioCorrect;
        let lblCorrect;

        for (const opt of question['options']) {
            const indx = question['options'].indexOf(opt);
            if(opt===correct){
                radioCorrect = document.querySelector(`#q${qNumber}op${indx}`);
                lblCorrect   = document.querySelector(`#lbl-q${qNumber}-${indx}`);
            }
        }
        const isCorrect = radioCorrect.checked;    
        let finalAns    = pTag.innerText.replace('Correcta','').replace('Incorrecta','');
        console.log(finalAns);
        
        // Retro for Usr
        if(isCorrect){
            correctas++;
            pTag.innerHTML = `<span class="span-resC">Correcta</span>${finalAns}`;
        }else{
            pTag.innerHTML = `<span class="span-resI">Incorrecta</span>${finalAns}`;
        }
        
        // disable radio btns, and <del> wrong asnwer
        for (const res of question['options']) {
            const indx   = question['options'].indexOf(res);
            // disable radio buttons - asnwr options
            const rad    = document.querySelector(`#q${qNumber}op${indx}`);
            rad.disabled = true;
            // <del> wrong answers
            // const radio = document.querySelector(`#${res}${question['num']}`);
            const lbl    = document.querySelector(`#lbl-q${qNumber}-${indx}`);
            if(!isCorrect){
                lbl.innerHTML = rad.checked ? `<del>${res}</del>` : res;
            }
        }
        // correct answer
        lblCorrect.classList.add('labelCorrect');
    }

    // result text for user
    // qnsHdr.innerHTML = `${qnsHdr.innerText}<span class="span-finalRes">${correctas} de ${questions.length}</span>`;
    secondHdr.innerHTML += `<span class="span-finalRes">${correctas} de ${questions.length}</span>`;
    
    // create retry button
    qnsCtnr.removeChild(btnSolve);
    const btnRetry       = document.createElement('a');
    btnRetry.textContent = 'Reintentar';
    btnRetry.classList.add('button-solve');
    btnRetry.href = `lectura.html?lvl=${nivel}`;
    qnsCtnr.append(btnRetry);
});

*/