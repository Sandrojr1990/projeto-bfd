const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pergunta(questao) {
    return new Promise((resolve) => {
        rl.question(questao, (resposta) => {
            resolve(resposta);
        });
    })
}

async function perguntarIdade() {
    let pessoa = {
        nome: "Ana",
        idade: 25,
        cidade: "Recife"
    }

    for (let k in pessoa){
        console.log(`${k} + ${pessoa[k]}`)
    }
    
    rl.close();
}

perguntarIdade();


