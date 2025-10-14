function verificarDia(){
    const valor = parseInt(document.getElementById("valor").value);
    let resposta_campo = document.getElementById("resposta");

    switch(valor) {
        case 1:
            resposta_campo.textContent = "Domingo"
            break;
        case 2:
            resposta_campo.textContent = "Segunda-feira"
            break;
        case 3:
            resposta_campo.textContent = "Terça-feira"
            break;
        case 4:
            resposta_campo.textContent = "Quarta-feira"
            break;
        case 5:
            resposta_campo.textContent = "Quinta-feira"
            break;
        case 6:
            resposta_campo.textContent = "Sexta-feira"
            break;
        case 7:
            resposta_campo.textContent = "Sábado"
            break;
        default:
            resposta_campo.textContent = "Valor invalido"
    }

 
}

