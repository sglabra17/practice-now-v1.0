
// Store dropdown elements
const catgTxt      = document.querySelector('#catg-txt');
const dropList     = document.querySelector('#dropdown');
const dropChildren = dropList.children;

// Logic : Dropdown Selection Text
for (const button of dropChildren) {
    button.addEventListener('click',()=>{
        const chosenCat   = button.innerHTML;
        catgTxt.innerHTML = chosenCat;

        console.log(catgTxt.innerHTML);
    });
}


