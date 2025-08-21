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
    const idade = await pergunta('Qual é a sua idade?');

    if(idade < 18) {
        console.log('Você é menor de idade.');
    } else if(idade > 60) {
        console.log('Você é idoso.');
    } else {
        console.log('Você é só um adulto.');
    }
}

perguntarIdade();


