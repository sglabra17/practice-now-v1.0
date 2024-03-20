const mainTag = document.getElementsByTagName('main');
const topNav  = document.querySelector('#myTopnav');

mainTag[0].addEventListener('click',()=>{
    if(topNav.className==='topnav responsive'){
        topNav.className = 'topnav';
    }
});

