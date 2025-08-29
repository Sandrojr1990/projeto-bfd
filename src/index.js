const readline = require('readline');

// criando interface para entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];
let perguntas = ['digite a primeira nota:', 'digite a segunda nota:', 'digite a terceira nota:,'];

// função para perguntar as notas
function perguntar(i) {
    if (i < perguntas.length) {
      rl.question(perguntas[i], (resposta) =>{
        let nota = parseFloat(resposta);

    if (isNaN(nota) /nota < 0 / nota > 10) {
      console.log("digite um número válido entre 0 e 10.");
      perguntar(i); // Repete a pergunta
    } else {
      notas.push(nota);
      perguntar(i + 1);
    }
     });
     } else {
    calcularMedia();
  }
 }
// função para calcular a média e mostra resultado
function calcularMedia() {
    let media = (notas[0] + notas[1] + notas[2]) / 3;
    console.log("Notas:", notas.join(", "));
    console.log("Média:", media.toFixed(2));

    if (media >= 7) {
        console.log("Aluno Aprovado!");
    } else {
        console.log("Aluno Reprovado!");
    }
    rl.close();
    }
    
     perguntar(0);
     

