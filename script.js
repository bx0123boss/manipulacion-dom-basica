// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito')
// const pid = document.querySelector('#pid')
// const input = document.querySelector('input')
// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
// });

// h1.innerHTML= 'Patito <br> Feo';
// console.log(h1.getAttribute('pantalla'));
// h1.setAttribute('pantalla','GHIA');
// h1.classList.add('rojo');
// input.value = "7594";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg');
// console.log(img);

// pid.innerHTML = "";
// pid.append(img);

const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);


function btnOnClick(){   
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: "  + sumaInputs;
    event.preventDefault();
    console.log( );
}

