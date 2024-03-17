
// Save nav bar option tags
const opBasico   = document.querySelector('#opBasico');
const opInter    = document.querySelector('#opInter');
const opAvanzado = document.querySelector('#opAvanzado');
const opPalabra  = document.querySelector('#opPalabra');

// add event to each option
opBasico.addEventListener('click',()=>{
    if(!opBasico.className.length){
        opBasico.className += (' '+'active-navlink');
        opInter.className    = '';
        opAvanzado.className = '';
        opPalabra.className  = '';
    }else if( opInter.className.length    ||
              opAvanzado.className.length ||
              opPalabra.className.length  ){
        opBasico.className = '';
    }
});

opInter.addEventListener('click',()=>{
    if(!opInter.className.length){
        opInter.className += (' '+'active-navlink');
        opBasico.className   = '';
        opAvanzado.className = '';
        opPalabra.className  = '';
    }else if( opBasico.className.length    ||
              opAvanzado.className.length ||
              opPalabra.className.length  ){
        opInter.className = '';
    }
});

opAvanzado.addEventListener('click',()=>{
    if(!opAvanzado.className.length){
        opAvanzado.className += (' '+'active-navlink');
        opBasico.className   = '';
        opInter.className    = '';
        opPalabra.className  = '';
    }else if( opBasico.className.length   ||
              opInter.className.length ||
              opPalabra.className.length  ){
        opAvanzado.className = '';
    }
});

opPalabra.addEventListener('click',()=>{
    if(!opPalabra.className.length){
        opPalabra.className += (' '+'active-navlink');
        opBasico.className   = '';
        opInter.className    = '';
        opAvanzado.className = '';
    }else if( opBasico.className.length  ||
              opInter.className.length   ||
              opAvanzado.className.length ){
        opPalabra.className = '';
    }
});
