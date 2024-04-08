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

// Dynamic Questions : function
const createQuestions = ()=>{
    // Initialize Questions
    const questionsArr  = objVocQuestions[nivel][varChosenCat];

    // Clean Questions Container
    qnsCtnr.innerHTML   = '';

    // Create Questions Header
    const qnsHeader     = document.createElement('header');
    qnsHeader.id        = 'qns-hdr',
    qnsHeader.classList.add('formHeader');
    qnsHeader.innerText = 'Escribe la respuesta correcta.';
    qnsCtnr.append(qnsHeader);

    /** Create Questions **/
    for (const question of questionsArr) {
        const qIndx = questionsArr.indexOf(question);
        const qNum  = question['num'];
        const qOpt  = question['question'];
        const qAns  = question['answer'];

        // Question Container
        const qnCtnr = document.createElement('div');
        qnCtnr.classList.add('question-ctnr');
        qnsCtnr.append(qnCtnr);

        // Question Paragraph
        const qnParagraph     = document.createElement('p');
        qnParagraph.classList.add("question-num");
        qnParagraph.innerText = `${qNum} de ${questionsArr.length}`;
        qnCtnr.append(qnParagraph);

        // Question Div (<label>,<input>)
        const qnDiv = document.createElement('div');
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
    const btnSolve       = document.createElement('a');
    btnSolve.textContent = 'Resolver';
    btnSolve.href        = '#';
    btnSolve.classList.add('button-solve');
    qnsCtnr.append(btnSolve);
}

// dynamic questions
createQuestions();

// Event : Solve Button


// Event : Chosen Category
for (const button of dropChildren){
    button.addEventListener('click',()=>{
        varChosenCat = chosenCat.replace(' ','').toLowerCase(); 
        console.warn('Categoría:',varChosenCat);

        createQuestions();
    });
}
