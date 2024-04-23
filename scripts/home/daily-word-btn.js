const opPalabra  = document.querySelector('#opPalabra');
const dailyCtnr  = document.querySelector('#dailyCtnr');
const topnav     = document.querySelector('#myTopnav');

opPalabra.addEventListener('click',()=>{
    const dailyClass = dailyCtnr.className;
    topnav.className = 'topnav';

    if(dailyClass === 'container'){
        dailyCtnr.classList.add('fixed');
    }else{
        dailyCtnr.className = 'container';
    }

});

window.onclick = event =>{
    let condition1 = event.target.matches('#opPalabra');
    let condition2 = event.target.matches('.container *');
    let condition3 = event.target.matches('.container');
    if(!condition1&&!condition2&&!condition3){
        dailyCtnr.className = 'container';
    }
}



