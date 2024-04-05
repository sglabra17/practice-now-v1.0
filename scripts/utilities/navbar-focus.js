const mainTag = document.querySelector('main');
const topNav  = document.querySelector('#myTopnav');

mainTag.addEventListener('click',()=>{
    if(topNav.className === 'topnav responsive'){
        topNav.className = 'topnav';
    }
});

