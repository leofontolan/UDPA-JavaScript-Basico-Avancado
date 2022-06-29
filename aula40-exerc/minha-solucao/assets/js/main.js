const estilosBody = getComputedStyle(document.body);
const bgColor = estilosBody.backgroundColor;

const ps =  document.querySelectorAll('.paragrafos p');


for (let p of ps){
    p.style.backgroundColor = bgColor;
    p.style.color = '#ffffff';
}
