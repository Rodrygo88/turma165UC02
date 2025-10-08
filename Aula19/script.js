// let texto = document.querySelector("h1");
// texto.textContent = "Manipulado";
// texto.innerHTML += "<u> lorem </u>";

// document.body.innerHTML += "<main><h2>Titulo2</h2></main>";

// let paragrafo = document.createElement("p");
// paragrafo.textContent = "Criado dinamicamente";
// document.body.appendChild(paragrafo);

// // paragrafo.classList.add("texto")

// function adicionarItem(){
//     let item = document.getElementById("item").value;
//     let novoItem = document.createElement("li");
//     novoItem.textContent = item;

//     document.getElementById("lista").appendChild(novoItem)
//     document.getElementById("item").value = "";
// }

function verificarIdade(){
    let idade = parseInt(document.getElementById("idade").value); 
    let resposta_campo = document.getElementById("resposta");
    let resposta;
    
    if(idade<18){
        resposta = "Você é menor de idade!";
    } else if(idade < 60){
        resposta = "Você é adulto.";
    } else{
        resposta = "Você é idoso!";
    }

    resposta_campo.textContent = resposta;
}


function verificarHorario(){
    let horario = parseInt(document.getElementById("horario").value);
    let resposta_campo = document.getElementById("resposta2");
    let resposta;
    
    if(horario >= 0 && horario <= 11){
        resposta = "Bom dia! ☀️";
    } else if(horario >= 12 && horario <= 17){
        resposta = "Boa tarde! 🌤️";
    } else if (horario >= 18 && horario <= 23){
        resposta = "Boa noite! 🌙";
    } else{
        resposta = "Horario invalido, digite um horario entre 0 e 23 apenas!";
    }

    resposta_campo.textContent = resposta;
}

function verificarNumero(){
    let numero = parseInt(document.getElementById("numero").value);
    let resposta_campo = document.getElementById("resposta3");
    let calculo = numero % 2;
    let resposta = "";

    if (calculo == 0){
        resposta = "Número é PAR"
    } else{
        resposta = "Número é IMPAR"
    }

    resposta_campo.textContent = `${calculo} e resposta ${resposta}`;
}

function verificarNota(){
    let nota = parseFloat(document.getElementById("nota").value);
    let resposta_campo = document.getElementById("resposta4");
    if(nota >= 0 && nota < 6){
        resposta = "Reprovado! ❌";
    } else if(nota >= 6 && nota <= 7.9){
        resposta = "Recuperação! ⚠️";
    } else if (nota >= 8 && nota <= 10){
        resposta = "Aprovado! ✅";
    } else{
        resposta = "Nota invalida, digite uma nota entre 0 e 10!";
    }

    resposta_campo.textContent = resposta;
}

function mudarCor(){
    let cor = document.getElementById("cor").value;
    let escolhida;

    if (cor == "vermelho"){
        escolhida = "red";

    } else if(cor == "azul"){
        escolhida = "blue";

    } else if(cor == "verde"){
        escolhida = "green";

    } else if(cor == "laranja"){
        escolhida = "orange";

    }else{
        escolhida = "white"
    }

    document.body.style.backgroundColor = escolhida;


}

function mudarCor2(){
    let cor = document.getElementById("cor2").value;
    
    document.body.style.backgroundColor = cor;
}

function calcularIMC(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    let imc = peso/(altura*altura); 
    let estado = ""

    if (imc < 18.5){
        estado = "Magreza";

    } else if(imc <= 24.9){
        estado = "Normal";

    } else if(imc <= 29.9){
        estado = "Sobrepeso - Obesidade I";

    } else if(imc <= 39.9){
        estado = "Obesidade - Obesidade II";

    }else if(imc >= 40,0){
        estado = "Obesidade Grave - Obesidade III"
    }else{
        estado = "Valores invalidos"
    }
    
    let resposta_campo = document.getElementById("resposta6");
    resposta_campo.textContent = `Seu IMC é de ${parseInt(imc)}, resultado: ${estado}`;
}