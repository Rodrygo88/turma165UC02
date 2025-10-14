function aritmetica(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);

    let resultado = (num1+num2+num3)/3

    let campo = document.getElementById("resposta");
 
    campo.textContent = resultado;
}

function ponderada(){
    const num1 = parseInt(document.getElementById("num1").value)*2;
    const num2 = parseInt(document.getElementById("num2").value)*3;
    const num3 = parseInt(document.getElementById("num3").value)*5;

    let resultado = (num1+num2+num3)/10

    let campo = document.getElementById("resposta");
 
    campo.textContent = resultado;


}

function geometrica(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);

    let resultado = Math.cbrt(num1*num2*num3)

    let campo = document.getElementById("resposta");
 
    campo.textContent = resultado;

}

function calcular(){
    let campo = document.getElementById("resposta");

    let media = parseInt(document.getElementById("media").value);
    switch(media){
        case 1:
            aritmetica()
            break
        case 2:
            ponderada()
            break               
        case 3:
            geometrica()
            break
        default:
            campo.textContent = "Valor invalido";
    }
}

function calculadora(){
    let campo = document.getElementById("resposta_calculadora");
    const valor1 = parseInt(document.getElementById("valor1").value);
    const valor2 = parseInt(document.getElementById("valor2").value);

    let calculo = parseInt(document.getElementById("calculos").value);
    
    switch(calculo){
        case 1:
            campo.textContent = valor1 + valor2
            break
        case 2:
            campo.textContent = valor1 - valor2
            break               
        case 3:
            campo.textContent = valor1 * valor2
            break
        case 4:
            if (valor1 == 0 || valor2 == 0){
                campo.textContent = "Divisão Invalida"
            } else{
                campo.textContent = valor1 / valor2
            }
            
            break
        default:
            campo.textContent = "Valor invalido";
    }
}
