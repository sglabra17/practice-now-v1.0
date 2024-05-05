const rwordTag   = document.querySelector('#rword');
const rwordSpa   = document.querySelector('#rwordSpa');
const defTag     = document.querySelector('#rwdefinition');
const rwexample  = document.querySelector('#rwexample');
const btnOtra    = document.querySelector('#btn-otra');
let foundWord    = '';
let spaFound     = true;

// Define de API URL
const url = 'https://random-word-api.herokuapp.com/word?lang=en';

// Make a GET request
async function getRandomWord() {
    let response = await fetch(url);
    let data     = await response.json();
    return data;
}

// Make a GET request
async function getRandomWordSpa(url2) {
    let response = await fetch(url2);
    let data     = await response.json();
    return data;
}

// get definition
async function getRandomWordDef(url3) {
    let response = await fetch(url3);
    let data     = await response.json();
    return data;
}


const getWord = ()=>{
    getRandomWord()
        .then((data)=> {
            foundWord          = data[0];
            rwordTag.innerHTML = foundWord;
            console.log(data[0]);


            /* GET Word in Spanish */
            const url2 = `https://dictionaryapi.com/api/v3/references/spanish/json/${foundWord}?key=40eda7d4-5bf9-4e18-a6f5-2c7fbe5b213e`;
            console.log('url2:',url2);

            getRandomWordSpa(url2)
                .then((data)=>{
                    console.log('spanish:',data);

                    if(typeof data[0] !== 'string'){
                        console.log(data[0]['shortdef'][0]);
                        const spaDef       = data[0]['shortdef'][0] || 'Sin Traducción';
                        rwordSpa.innerHTML = spaDef;
                        spaFound           = true;
                    }else{
                        spaFound           = false;
                        rwordSpa.innerHTML = 'Sin Traducción';
                        console.log('--------  Sin Español');
                    }

                    /* GET Definition */
                    const url3 = `https://api.dictionaryapi.dev/api/v2/entries/en/${foundWord}`;
                    console.log('url3:',url3);
                    
                    getRandomWordDef(url3)
                        .then((data)=>{
                            console.log(data);
                            let isArr = data.length ? true : false; 

                            if(isArr){
                                defTag.innerHTML    = '<strong style="margin-right:.5em;">Def.</strong>';
                                defTag.innerHTML    += data[0]['meanings'][0]['definitions'][0]['definition'];
                                rwexample.innerHTML = `<li>${data[0]['meanings'][0]['definitions'][0]['example'] || 'Sin Ejemplo'}</li>`;
                            }else{
                                defTag.innerHTML    = '<strong style="margin-right:.5em;">Def.</strong>'+'Sin Definición';
                                rwexample.innerHTML = '<li>Sin Ejemplo</li>';
                                if(!spaFound){
                                    rwordTag.innerHTML =  'Buscando...';
                                    rwordSpa.innerHTML =  'Buscando...';
                                    defTag.innerHTML   =  '<strong style="margin-right:.5em;">Def.</strong>'+'Buscando...';
                                    getWord();
                                }
                            }
                        })
                        .catch( err => {
                            console.log(err);
                        });


                })
                .catch( err => {
                    console.log(err);
                });


        })
        .catch( err => {
            console.log(err);
        });
        
}

// Botón : obtener otra palabra y definición
btnOtra.addEventListener('click',()=>{getWord();});

// Obtener palabra y definición
getWord();
