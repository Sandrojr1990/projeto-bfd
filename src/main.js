const readline = require('readline');
const prompt = readline.createInterface({
    input:process.stdin, output: process.stdout
})
function perguntar(perguta) {
    return new promise((resolve) => {
        prompt.question(pergunta, (resposta) => {
            const valor = Number(resposta.replace(',',','));
            resolve(valor);
        })
    })
}