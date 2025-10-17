let alunos = [];
let quantidade = parseInt(prompt("Quantidade de alunos: "))

for(let i = 0; i < quantidade; i++){
     let aluno = prompt("Quantidade de alunos: ")
    alunos.push(aluno)
}

alunos.forEach(aluno => {
    document.write(`${aluno} <br>`)
})

     