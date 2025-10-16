
function tabuada(){

    let numero = parseInt(document.getElementById("valor").value)
    let div = document.getElementById("div")
    div.innerText = ""

    for (let i = 1; i <= 10; i++) {
    const texto = document.createElement("li");
    texto.innerText = `${numero} x ${i} = ${numero*i}`;
    div.appendChild(texto)
  }
}
