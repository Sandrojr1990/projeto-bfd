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

    do {
        console.log(`Número: ${idade}`);
        idade++;
    } while (idade < 5);
    console.log(`Você tem chegou ao fim: ${idade} anos!`);
}

perguntarIdade();


