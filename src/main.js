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
    let idade = await pergunta('Qual é a sua idade?');

    while(idade <= 10) {
        console.log(`Número: ${idade}`);
        idade++;
    }
    console.log(`Você tem chegou ao fim: ${idade} anos!`);
}

perguntarIdade();


