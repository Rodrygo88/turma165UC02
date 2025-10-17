let cores = ["azul","verde","laranja"];
let div = document.querySelector("div")


for(let i = 0; i < cores.length; i++){
    let p = document.createElement("p");
    p.textContent = cores[i];
    p.classList.add(cores[i])
    div.appendChild(p)
}