
// Store navbar option tags
const opBasico   = document.querySelector('#opBasico');
const opInter    = document.querySelector('#opInter');
const opAvanzado = document.querySelector('#opAvanzado');
const opPalabra  = document.querySelector('#opPalabra');
const niveles    = [ opBasico, opInter, opAvanzado, opPalabra ];

// Initialize Card's href (basico):
const cardLinks = document.querySelectorAll('.card-link');

console.warn('inicial');
cardLinks.forEach((card)=>{
    const href = card.getAttribute('href')+`?lvl=basico`;
    card.setAttribute('href',href);
    console.log(card.getAttribute('href'));
});


// Change className if Selected, Also Change Card's href
niveles.forEach((nivel,indx,arr)=>{

    nivel.addEventListener('click',()=>{
        if(nivel!==opPalabra){//changing href's
            const level = nivel.innerHTML.replace('á','a').toLowerCase();
            console.warn('nuevos');
            cardLinks.forEach((card)=>{
                const href = card.getAttribute('href').split('?')[0];
                card.setAttribute('href',href+`?lvl=${level}`);
                console.log(card.getAttribute('href'));
            });
        }

        if(!nivel.className.length){// active link style
            nivel.className = 'active-navlink';
            for (const option of arr) {
                if(nivel === option){continue;}
                option.className = '';
            }
        }
    });

});
