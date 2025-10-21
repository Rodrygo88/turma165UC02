let tarefas = JSON.parse(localStorage.getItem("alunos")) || [];
let aluno = document.querySelector("#aluno");
let matricula = document.querySelector("#matricula");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");
let indiceEdicao = null;

mostrarTarefas();

btnAdd.addEventListener("click", () => {
    if(aluno.value === "" || matricula.value === ""){
        alert("Digite uma tarefa");
    }else if(indiceEdicao == null){
        tarefas.push({"aluno": aluno.value, "matricula": matricula.value});

    } else{
        tarefas[indiceEdicao] = aluno.value
        indiceEdicao = null
        btnAdd.textContent = "Adicionar"
        
    }
    aluno.value = "";
    mostrarTarefas();
    salvarLocalStorage();
});


function mostrarTarefas(){
    lista.innerHTML = ""
    tarefas.forEach((t, i)=>{
        let li = document.createElement("li");
        li.textContent = `Aluno: ${t.aluno} - Matricula: ${t.matricula}`;

        let editar = document.createElement("button");
        editar.textContent = "Editar";

        let excluir = document.createElement("button");
        excluir.textContent = "Excluir";

        editar.addEventListener("click", ()=> atualizar(i));
        
        excluir.addEventListener("click", ()=> apagar(i));

        li.appendChild(editar)
        li.appendChild(excluir)
        lista.appendChild(li)
    })
}


function apagar(i){
    let excluir = window.confirm(`Deseja realmente apagar? ${tarefas[i]}`)
    if (excluir){
        tarefas.splice(i,1)
    }
    
    mostrarTarefas();
    salvarLocalStorage();
}

function atualizar(i){
    btnAdd.textContent = "Atualizar";
    aluno.value = tarefas[i].aluno;
    matricula.value = tarefas[i].matricula;
    indiceEdicao = i;
    

}

function salvarLocalStorage(){
    localStorage.setItem("alunos", JSON.stringify(tarefas));
}