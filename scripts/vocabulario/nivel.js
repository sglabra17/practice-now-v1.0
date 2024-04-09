// predefined headers
const levelHeaders = {
    'basico'    :  [' - Nivel Básico',''],

    'intermedio':  [' - Nivel Intermedio',''],

    'avanzado'  :  [' - Nivel Avanzado','']
};

// Get URL value, and Category 
const nivel      = location.search.split("=")[1];
let varChosenCat = chosenCat.toLocaleLowerCase();
console.log('nivel:',nivel);
console.log('Categoría:',varChosenCat);

// Dynamic Header
const subjTitle      = document.querySelector('#subject-title');
subjTitle.innerHTML += levelHeaders[nivel][0];

// Questions Container : Contains All Qns
const qnsCtnr        = document.querySelector('#qns-ctnr');

// Create Questions Header
const qnsHeader      = document.createElement('header');
qnsHeader.id         = 'qns-hdr',
qnsHeader.classList.add('formHeader');
qnsHeader.innerText  = 'Escribe la respuesta correcta en inglés.';

// Initialize Questions
let questionsArr     = objVocQuestions[nivel][varChosenCat];

// Create : Solve Button
const btnSolve       = document.createElement('a');
btnSolve.textContent = 'Resolver';
btnSolve.href        = '#';
btnSolve.classList.add('button-solve');


// Dynamic Questions : function
const createQuestions = ()=>{
    questionsArr        = objVocQuestions[nivel][varChosenCat];

    // Clean Questions Container
    qnsCtnr.innerHTML   = '';

    // Append : Questions Header
    qnsCtnr.append(qnsHeader);

    /** Create Questions **/
    for (const question of questionsArr) {
        const qIndx = questionsArr.indexOf(question);
        const qNum  = question['num'];
        const qOpt  = question['question'];
        const qAns  = question['answer'];

        // Question Container
        const qnCtnr = document.createElement('div');
        qnCtnr.id    = `qnCtnr-${qNum}`;
        qnCtnr.classList.add('question-ctnr');
        qnsCtnr.append(qnCtnr);

        // Question Paragraph
        const qnParagraph     = document.createElement('p');
        qnParagraph.classList.add("question-num");
        qnParagraph.innerText = `${qNum} de ${questionsArr.length}`;
        qnCtnr.append(qnParagraph);

        // Question Div (<label>,<input>)
        const qnDiv = document.createElement('div');
        qnDiv.id    = `qnDiv-${qNum}`;
        qnDiv.classList.add('question');
        qnCtnr.append(qnDiv);

        // <label>
        const qnLabel     = document.createElement('label');
        qnLabel.setAttribute('for',`inp-${qNum}`);
        qnLabel.id        = `lb-${qNum}`;
        qnLabel.classList.add('inputLabel');
        qnLabel.innerText = qOpt;
        qnDiv.append(qnLabel);

        // <input>
        const qnInput     = document.createElement('input');
        qnInput.type      = 'text';
        qnInput.id        = `inp-${qNum}`;
        qnInput.classList.add('inputBox');
        qnInput.autocomplete = 'off';
        qnDiv.append(qnInput);
    }

    // Add solve button
    qnsCtnr.append(btnSolve);
}

// dynamic questions
createQuestions();

// Event : Chosen Category
for (const button of dropChildren){
    button.addEventListener('click',()=>{
        varChosenCat = chosenCat.replace(' ','').toLowerCase(); 
        console.warn('Categoría:',varChosenCat);

        createQuestions();
    });
}

// Event : Solve Button
btnSolve.addEventListener('click',()=>{
    console.warn('--Validar Respuestas--');
    let correctas        = 0;
    qnsHeader.innerText  = 'Resultado:';

    // Style and Validate Form Tags
    for (const question of questionsArr) {
        // auxiliar variables
        const qNum       = question['num'];
        const qWord      = question['question'];
        const qAnswer    = question['answer'];
        
        // <label>,<input> tags
        const qnTag      = document.querySelector(`#lb-${qNum}`);
        const qnInput    = document.querySelector(`#inp-${qNum}`);
        qnInput.disabled = true;// disable <input> box

        // Get user answer
        const userAnswer = qnInput.value.toLowerCase().trim() || 'nada';
        
        // Validate answer
        const isRight    = qAnswer === userAnswer;

        // HTML reference to Question Div
        const qnDiv      = document.querySelector(`#qnDiv-${qNum}`); 

        // Create user Feedback <span>s
        const span       = document.createElement('span');
        
        // If Answer is Wrong
        if(!isRight){
            // append user feedback <span>
            span.classList.add('span-resI');
            span.innerText = 'Incorrecta';   
            qnDiv.prepend(span);

            // change inset shadow color
            const qnInputStyle = 'box-shadow: inset 0 0 5px #ff00007e;color:#293da37e';
            qnInput.setAttribute('style',qnInputStyle);

            // append right answer
            const qnCtnr = document.querySelector(`#qnCtnr-${qNum}`);
            const pAnswr = document.createElement('p');
            pAnswr.classList.add('answer-p');
            pAnswr.innerHTML = `Respuesta:<span>${qAnswer}</span>`;
            qnCtnr.append(pAnswr);

        // If Answer is Right
        }else{
            correctas++;

            // append user feedback <span>
            span.classList.add('span-resC');
            span.innerText = 'Correcta';   
            qnDiv.prepend(span);

            // change inset shadow color
            const qnInputStyle = 'box-shadow: inset 0 0 5px green;color:#293da37e';
            qnInput.setAttribute('style',qnInputStyle);
        }

    
    }

    qnsHeader.innerHTML += `<span class="span-finalRes">${correctas} de ${questionsArr.length}</span>`

    // create retry button
    qnsCtnr.removeChild(btnSolve);
    const btnRetry       = document.createElement('a');
    btnRetry.textContent = 'Reintentar';
    btnRetry.classList.add('button-solve');
    btnRetry.href        = `vocabulario.html?lvl=${nivel}`;
    qnsCtnr.append(btnRetry);
});