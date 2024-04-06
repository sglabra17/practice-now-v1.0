
// Store dropdown <button>, and options
const dpDwnBtn    = document.querySelector('#btn');
const btnsCtnr    = document.querySelector('#dropdown');
// DDown - Image Icon
const dropIconDwn = document.querySelector('#dropIconDwn');
const dropIconUp  = document.querySelector('#dropIconUp');

// add event : Dropdown Button
dpDwnBtn.addEventListener('click',()=>{
    let btnsCtnrClass = btnsCtnr.className;

    if(btnsCtnrClass==='dropdown'){
        btnsCtnr.className = 'dropdown onDrop';
        dropIconDwn.setAttribute('style','display:none');
        dropIconUp.setAttribute('style','display:block');
    }else{
        btnsCtnr.className = 'dropdown';
        dropIconDwn.setAttribute('style','display:block');
        dropIconUp.setAttribute('style','display:none');
    }
});


// Close the dropdown if the user clicks outside of it
window.onclick = event =>{
    if (!event.target.matches('.btn')) {
        let dropdown = document.querySelector(".dropdown");

        if (dropdown.classList.contains('onDrop')) {
            dropdown.classList.remove('onDrop');
        }
        
        dropIconDwn.setAttribute('style','display:block');
        dropIconUp.setAttribute('style','display:none');
    }
}