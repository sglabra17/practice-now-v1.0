// predefined headers
const levelHeaders = {
    'basico'    : [' - Nivel Básico',
    'Empieza a practicar inglés con ejercicios de gramática de nivel básico.',
    ['personal-pronouns','possessives','demonstrative-pronouns'] ],

    'intermedio': [' - Nivel Intermedio',
    'Ejercicios para aquellos que dominan los conceptos básicos del lenguaje.',
    ['indefinite-pronouns','relative-and-indefinite-pronouns','intensifiers-and-mitigators']],

    'avanzado'  : [' - Nivel Avanzado',
    'Dirigido a usuarios avanzados, para los que quieren perfeccionar su inglés.',
    ['present-perfect','for/since/ago','modal-perfects']]
};

// get url value
const nivel = location.search.split("=")[1];
console.log(nivel);

// HTML references - Headers
const title    = document.querySelector('#subject-title');
const subTitle = document.querySelector('#subject-subtitle');
// HTML reference - Theme Options Container
const optsCtnr = document.querySelector('#grammar-optsCtnr');
// HTML reference - Questions
const qnsCtnr  = document.querySelector('#qns-ctnr');

// Dynamic Titles
title.innerHTML    += levelHeaders[nivel][0];
subTitle.innerHTML  = levelHeaders[nivel][1];

// Grammar Topics Array
const topicsArr = levelHeaders[nivel][2];

// Initialize Theme & Questions
let chosenTheme = levelHeaders[nivel][2][0];
let questions   = qnsObj[nivel][chosenTheme];

// Create header
const qnsHeader     = document.createElement('header');
qnsHeader.id        = 'qns-hdr';
qnsHeader.classList.add('formHeader');
qnsHeader.innerText = 'Elige la respuesta correcta.';

// Create Solve Button
const btnSolve       = document.createElement('a');
btnSolve.textContent = 'Resolver';
btnSolve.href        = '#principal';
btnSolve.classList.add('button-solve');


// Create Grammar Options : Chips
console.warn('Temas:');
for (const theme of topicsArr) {
    const indxTheme    = topicsArr.indexOf(theme);
    // Create Topic Button
    const topicBtn     = document.createElement('button');
    topicBtn.id        = `btn-${indxTheme}`;
    topicBtn.classList.add('reading-option');
    if(indxTheme===0){topicBtn.classList.add('rop-active');}
    topicBtn.innerText = theme;
    optsCtnr.append(topicBtn);
}

// Topic Buttons Array
const topicBtnsArr = optsCtnr.children;

// Select Grammar Topic
for (const button of topicBtnsArr) {
    button.addEventListener('click',()=>{
        chosenTheme = button.innerText;
        dynamiContent();

        // get buttons Identification
        const chipIndx = button.id.split('-')[1];

        // active / not active btn 
        for (const itm of topicBtnsArr) {
            const itmIndx = itm.id.split('-')[1];
        
            if(!(itmIndx===chipIndx)){//not active
                itm.className = 'reading-option';
            }else{//active
                itm.className = 'reading-option rop-active';
            }
        }
    });
}

// Dynamic Content
const dynamiContent = () =>{
    questions = qnsObj[nivel][chosenTheme];

    // clear Container of Questions
    qnsCtnr.innerHTML   = '';

    // append Header of Questions
    qnsHeader.innerText = 'Elige la respuesta correcta.';
    qnsHeader.style     = 'text-align:left';
    qnsCtnr.append(qnsHeader);

    for (const question of questions) {
        // Create <div> question container
        const qCtnr = document.createElement('div');
        qCtnr.classList.add('question-ctnr');
        qnsCtnr.append(qCtnr);
        
        // Create <p> with No. of Question
        const qNumTag     = document.createElement('p');
        qNumTag.classList.add('question-num');
        qNumTag.innerText = `${question['num']} de ${questions.length}`;
        qCtnr.append(qNumTag);
    
        // Create <p> with Question Text
        const qnTag     = document.createElement('p');
        qnTag.id        = `qp${question['num']}`;
        qnTag.innerText = `${question['question']}`;
        qCtnr.append(qnTag);
    
        // Create <div> answers container
        const ansCtnr = document.createElement('div');
        ansCtnr.classList.add('answers-ctnr');
        qCtnr.append(ansCtnr);
    
        // Create answers
        for (const op of question['options']) {
            const indxOp    = question['options'].indexOf(op);
    
            // create answer container
            const awrCtnr   = document.createElement('div');
            awrCtnr.classList.add('answer-ctnr');
            ansCtnr.append(awrCtnr);
    
            // create radio button
            const inRadio   = document.createElement('input');
            inRadio.type    = 'radio';
            inRadio.id      = `rad${indxOp}q${question['num']}`;
            inRadio.name    = `answer${question['num']}`;
            inRadio.value   = op;
            inRadio.checked = indxOp === 0 ? true : false;
            awrCtnr.append(inRadio);
    
            // create label
            const radioLabel     = document.createElement('label');
            radioLabel.id        = `lbl-${indxOp}-q${question['num']}`;
            radioLabel.setAttribute('for',inRadio.id);
            radioLabel.innerText = op;
            awrCtnr.append(radioLabel);
        }
    }
    
    // Append Btn Solve
    qnsCtnr.append(btnSolve);
}

// Create Questions
dynamiContent();

// Solve Button - Event
const qnsHdr = document.querySelector('#qns-hdr');

btnSolve.addEventListener('click',()=>{
    let correctas    = 0;
    qnsHdr.innerHTML = 'Resultado:';
    qnsHdr.setAttribute('style','text-align:center;');
    
    // Validate Answers
    for (const question of questions) {
        const pTag         = document.querySelector(`#qp${question['num']}`);
        const correct      = question['answer'];
        const correctIndx  = question['options'].indexOf(correct);

        const radioCorrect = document.querySelector(`#rad${correctIndx}q${question['num']}`);
        const lblCorrect   = document.querySelector(`#lbl-${correctIndx}-q${question['num']}`);
        // console.log('radioCorrect:',radioCorrect);
        // console.log('lblCorrect:',lblCorrect);
        const isCorrect    = radioCorrect.checked;

        // Replace Blank Space
        const [txt1,txt2] = pTag.innerText.split('___');       
        const finalAns    = `${txt1}<span class="p-ansTxt">${correct}</span>${txt2}`;

        // Feedback Text for Usr
        if(isCorrect){
            correctas++;
            pTag.innerHTML = `<span class="span-resC">Correcta</span>${finalAns}`;
        }else{
            pTag.innerHTML = `<span class="span-resI">Incorrecta</span>${finalAns}`;
        }
        
        // disable radio btns, and <del> wrong asnwer
        for (const res of question['options']) {
            const resIndx = question['options'].indexOf(res);

            // disable radio buttons - asnwr options
            const rad    = document.querySelector(`#rad${resIndx}q${question['num']}`);
            rad.disabled = true;
            // <del> wrong answers
            const lbl    = document.querySelector(`#lbl-${resIndx}-q${question['num']}`);
            if(!isCorrect){
                lbl.innerHTML = rad.checked ? `<del>${res}</del>` : res;
            }
        }

        // Style correct answer
        lblCorrect.classList.add('labelCorrect');
    }

    // result text for user
    qnsHdr.innerHTML += `<span class="span-finalRes">${correctas} de ${questions.length}</span>`;
    
    // create retry button
    qnsCtnr.removeChild(btnSolve);
    const btnRetry       = document.createElement('a');
    btnRetry.textContent = 'Reintentar';
    btnRetry.classList.add('button-solve');
    btnRetry.href        = `gramatica.html?lvl=${nivel}`;
    qnsCtnr.append(btnRetry);
});


