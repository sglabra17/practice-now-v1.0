const burguer = document.querySelector('#burguer-menu');

burguer.addEventListener('click',()=>{

    const topNavDiv = document.querySelector('#myTopnav');
    
    if(topNavDiv.className === 'topnav'){
        topNavDiv.className += (' '+'responsive');
    }else{
        topNavDiv.className = 'topnav';
    }

    console.log(topNavDiv.className);
});

