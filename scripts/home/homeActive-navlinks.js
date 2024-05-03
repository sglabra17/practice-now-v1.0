
// Store navbar option tags
const opBasico     = document.querySelector('#opBasico');
const opInter      = document.querySelector('#opInter');
const opAvanzado   = document.querySelector('#opAvanzado');
const niveles      = [ opBasico, opInter, opAvanzado ];
// Store floating text
const floatingText = document.querySelector('#floatingText');
// Store UI Card Links
const cardLinks    = document.querySelectorAll('.card-link');

// Change className if Selected, Also Change Card's href
for (const nivel of niveles) {
    nivel.addEventListener('click',()=>{
        topnav.className = 'topnav';

        //changing href's
        const level = nivel.innerHTML.replace('á','a').toLowerCase();
        console.warn('nuevos');
        for (const card of cardLinks) {
            const href = card.getAttribute('href').split('?')[0];
            card.setAttribute('href',href+`?lvl=${level}`);
            console.log(card.getAttribute('href'));
        }
        
        // active link style
        if(!nivel.className.length){
            nivel.className = 'active-navlink';
            for (const option of niveles) {
                if(nivel === option){continue;}
                option.className = '';
            }
        }
        
        // floating text value
        floatingText.innerHTML = nivel.innerHTML;
    });
}
