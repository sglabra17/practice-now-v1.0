const burguer   = document.querySelector('#burguer-menu');
const topNavDiv = document.querySelector('#myTopnav');

burguer.addEventListener('click',()=>{

    topNavDiv.className = topNavDiv.className === 'topnav' ? 'topnav responsive' :
                                                             'topnav';

    console.log(topNavDiv.className);
});

