// for(let i = 0; i < 500; i++){
//     document.write(`${i}`)
// }

let inicial = 10;
let final = 20;
let soma = 0;

for(i=inicial; i<= final;i++){
    if(i % 2 == 0){
        console.log(i)
        soma = soma + i
    }
}

console.log(soma-inicial-final)

