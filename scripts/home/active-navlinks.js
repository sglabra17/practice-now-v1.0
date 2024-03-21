
// Store navbar option tags
const opBasico   = document.querySelector('#opBasico');
const opInter    = document.querySelector('#opInter');
const opAvanzado = document.querySelector('#opAvanzado');
const opPalabra  = document.querySelector('#opPalabra');
const niveles = [opBasico,opInter,opAvanzado,opPalabra];

// Initialize Card's href (basico):
const cardLinks = document.querySelectorAll('.card-link');

console.warn('inicial');
cardLinks.forEach((card)=>{
    const href = card.getAttribute('href')+`?lvl=basico`;
    card.setAttribute('href',href);
    console.log(card.getAttribute('href'));
});


// Change className if Selected, Also Change Card's href
niveles.forEach((itm,indx,arr)=>{

    itm.addEventListener('click',()=>{
        if(itm!==opPalabra){//changing href's
            const level = itm.innerHTML.replace('á','a').toLowerCase();

            console.warn('nuevos');
            cardLinks.forEach((card)=>{
                const href = card.getAttribute('href').split('?')[0];
                card.setAttribute('href',href+`?lvl=${level}`);
                console.log(card.getAttribute('href'));
            });
        }

        if(!itm.className.length){// active link style
            itm.className = 'active-navlink';
            for (const option of arr) {
                if(itm === option){continue;}
                option.className = '';
            }
        }
    });

});
