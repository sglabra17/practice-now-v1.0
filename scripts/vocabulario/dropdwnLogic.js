
// Store dropdown <button>, and options
const dpDwnBtn    = document.querySelector('#btn');
const btnsCtnr    = document.querySelector('#dropdown');
// DDown - Image Icon
const dropIconDwn = document.querySelector('#dropIconDwn');
const dropIconUp  = document.querySelector('#dropIconUp');

// add event : Dropdown List When Clicked
dpDwnBtn.addEventListener('click',()=>{
    const btnsCtnrClass = btnsCtnr.className;

    if( btnsCtnrClass === 'dropdown' ){
        btnsCtnr.className = 'dropdown onDrop';
        dropIconDwn.setAttribute('style','display:none');
        dropIconUp.setAttribute('style','display:block');
    }else{
        btnsCtnr.className = 'dropdown';
        dropIconUp.setAttribute('style','display:none');
        dropIconDwn.setAttribute('style','display:block');
    }
});


// Close the dropdown if the user clicks outside of it
window.onclick = event =>{
    const condition1 = !event.target.matches('.btn');
    const condition2 = !event.target.matches('#catg-txt');
    const condition3 = !event.target.matches('#dropIconDwn');

    if (condition1 && condition2 && condition3) {    
        const dropdown = document.querySelector(".dropdown");

        if (dropdown.classList.contains('onDrop')) {
            dropdown.classList.remove('onDrop');
        }
        // Icon Image - DropDown
        dropIconUp.setAttribute('style','display:none');
        dropIconDwn.setAttribute('style','display:block');
    }
}