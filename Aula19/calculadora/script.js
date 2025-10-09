let valores = ""

function pegarValor(numero){
    let display = document.getElementById("display");
    display.innerHTML = "";
    valores += String(numero)
    display.innerHTML = `<h1>${valores}</h1>`;
}

function apagar(){
    valores = "";
    let display = document.getElementById("display");
    display.innerHTML = `<h1>${valores}</h1>`;
}

function calcular(){
    let display = document.getElementById("display");
    resultado = eval(valores);
    display.innerHTML = `<h1>${resultado.toFixed(2)}</h1>`;
    
}

