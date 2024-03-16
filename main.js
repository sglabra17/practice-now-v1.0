const burguer = document.querySelector('#burguer-menu');

// console.log(burguer);

burguer.addEventListener('click',()=>{

    let topNavDiv = document.querySelector('#myTopnav');
    
    if(topNavDiv.className === 'topnav'){
        topNavDiv.className += (' '+'responsive');
    }else{
        topNavDiv.className = 'topnav';
    }

    console.log(topNavDiv.className);

});
