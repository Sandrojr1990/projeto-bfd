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
    const frutas = ["maçã", "banana", "uva"];

    for (let fruta of frutas) {
        console.log(`A fruta é ${fruta}`);
    }
    rl.close();
}

perguntarIdade();


