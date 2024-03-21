
// Store navbar option tags
const opGram = document.querySelector('#opGram');
const opVoca = document.querySelector('#opVoca');
const opLec  = document.querySelector('#opLec');
const opPron = document.querySelector('#opPron');
const options = [opGram,opVoca,opLec,opPron];

// Change className if Selected
options.forEach((itm,indx,arr)=>{

    itm.addEventListener('click',()=>{
        if(!itm.className.length){
            itm.className = 'active-navlink';
            for (const option of arr) {
                if(itm === option){continue;}
                option.className = '';
            }
        }
    });

});
