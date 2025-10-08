let valor = ""

function pegarValor(numero){
    let display = document.getElementById("display");
    display.innerHTML = "";
    valor += String(numero)
    display.innerHTML = `<h1>${valor}</h1>`;
}

function apagar(){
    valor = "";
    let display = document.getElementById("display");
    display.innerHTML = `<h1>${valor}</h1>`;
}

function calcular(){
    alert("O valor1 é " + valor)
}

// function dividir(){
//     let display = document.getElementById("display");
//     display.innerHTML += `<h1> / </h1>`;
// }

// function multiplicar(){
//     let display = document.getElementById("display");
//     display.innerHTML += `<h1> x </h1>`;
// }

// function somar(){
//     let display = document.getElementById("display");
//     display.innerHTML += `<h1> + </h1>`;
// }

// function diminuir(){
//     let display = document.getElementById("display");
//     display.innerHTML += `<h1> - </h1>`;
// }


