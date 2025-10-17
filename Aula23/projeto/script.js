let tarefas = [];
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", () => {
    if(input.value === ""){
        alert("Digite uma tarefa");
    }else{
        tarefas.push(input.value);
    }
    input.value = "";

    console.log(tarefas);
    mostrarTarefas();
});


function mostrarTarefas(){
    lista.innerHTML = ""
    tarefas.forEach((t, i)=>{
        let li = document.createElement("li");
        let editar = document.createElement("button");
        let excluir = document.createElement("button");
        editar.textContent = "Editar";
        excluir.textContent = "Excluir";
        excluir.addEventListener("click", ()=> apagar(i));
        li.textContent = t;
        li.appendChild(editar)
        li.appendChild(excluir)
        lista.appendChild(li)
    })
}


function apagar(i){
    tarefas.splice(i,1)
    mostrarTarefas();
}