/**
 * CATEGORY TEXT
 */
// Store dropdown elements
const catgTxt      = document.querySelector('#catg-txt');
const dropList     = document.querySelector('#dropdown');
const dropChildren = dropList.children;
let chosenCat      = 'Classroom';

// Logic : Dropdown Selection Text
for (const button of dropChildren) {
    button.addEventListener('click',()=>{
        chosenCat         = button.innerHTML;
        catgTxt.innerHTML = chosenCat;
    });
}

