
// Store dropdown elements
const dropBtn      = document.querySelector('#btn');
const dropList     = document.querySelector('#dropdown');
const dropChildren = dropList.children;
let initString     = 'Categoría';

// Logic : Dropdown Selection Text
for (const button of dropChildren) {
    button.addEventListener('click',()=>{
        const inrTxtDrop  = dropBtn.innerHTML;
        const chosenCat   = button.innerHTML;

        dropBtn.innerHTML = inrTxtDrop.replace(initString,chosenCat);
        initString        = chosenCat;
    });
}


