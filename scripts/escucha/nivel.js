const videos = {
    basico : [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/erjMgola4fQ?si=VZ_QsAUKr7H9lIVP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/uVGV8LG3HHM?si=9F1hOYmmoXbI-kAf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/eYAaLWdx_h0?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI" title="A1 English Listening Practice - Weather" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    ],
    intermedio:[
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/Qwv2TnDZVzQ?list=PLhNRdHEdUQeyIjNRrwWnMU_iph8amkaJg" title="B1 English Listening Practice - The Beach" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/tnvj7e1n5xk?list=PLhNRdHEdUQeyIjNRrwWnMU_iph8amkaJg" title="B1 English Listening Practice - American Universities" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/pWn_yaTVbSg?list=PLhNRdHEdUQeyIjNRrwWnMU_iph8amkaJg" title="B1 English Listening Practice - Christmas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    ],
    avanzado:[
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/_9ZcezA65e0?list=PL5uXqO84WYGttociTaMlqS_LvHCvnPq8q" title="🥘Eating &amp; drinking🍹Advanced English Speaking exam practice &amp; speaking exam questions Level 4/5,B2/C1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/2Qm6mnINOO8?list=PL5uXqO84WYGttociTaMlqS_LvHCvnPq8q" title="The Homework Debate: Should Schools Send Homework? 🇬🇧 English Listening Practice B2/C1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<iframe width="853" height="480" src="https://www.youtube.com/embed/FFrTzmo3D0c?list=PL5uXqO84WYGttociTaMlqS_LvHCvnPq8q" title="Talking about &#39;Friends&#39; (the series) in English 🇬🇧 Advanced English Listening Practice C1/Level 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    ]
}

// get url value
let nivel = location.search.split("=")[1];

// html reference - container of videos
const vidsCtnr = document.querySelector('#vids-ctnr');

// array of videos - links
const videosArr = videos[nivel];
let contador    = 1;

for (const video of videosArr) {
    // append video container
    const vidCtnr     = document.createElement('div');
    vidCtnr.classList.add('video-ctnr');
    vidCtnr.innerHTML = `<h1 class="formHeader">Video ${contador}</h1>${video}`;
    vidsCtnr.append(vidCtnr);

    contador++;
}