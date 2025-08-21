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

async function perguntarNome() {
    const idade = await pergunta('Qual é a sua idade?');

    switch(idade) {
        case idade < 18:
            console.log('Você é menor de idade.');
            break;
        case idade > 60:
            console.log('Você é idoso.');
            break;
        default:
            console.log('Você é só um adulto.');
    }      


}

perguntarNome();


