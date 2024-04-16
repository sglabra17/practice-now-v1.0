
// Store navbar option tags
const opGram = document.querySelector('#opGram');
const opVoca = document.querySelector('#opVoca');
const opLec  = document.querySelector('#opLec');
const opPron = document.querySelector('#opPron');
const opEsc  = document.querySelector('#opEsc');
const themes = [ opGram, opVoca, opLec, opPron, opEsc ];

// get url value
let lvl = location.search.split("=")[1];

// initialize URLs with current level
for (const theme of themes) {
    const href = theme.getAttribute('href');
    theme.setAttribute('href',href+`?lvl=${lvl}`);
}

// Change className if Selected (Active Links)
for (const theme of themes) {
    theme.addEventListener('click',()=>{
        if(!theme.className.length){
            theme.className = 'active-navlink';
            for (const opt of themes) {
                if(theme === opt){continue;}
                theme.className = '';
            }
        }
    });
}