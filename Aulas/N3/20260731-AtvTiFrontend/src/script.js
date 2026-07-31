// 1. Criando e exibindo uma mensagem inicial
let message = "Snippets in Javascript";

// Exibe uma caixa de diálogo na tela
alert(message);

// Imprime a mensagem no console do desenvolvedor do navegador
console.log(message);

// Escreve a mensagem diretamente na página HTML
document.write(`${message}<br />.Let's learn!<br /><br />`);

// 2. Solicitando uma confirmação (retorna true ou false)
let confirmation = confirm(message); // true or false
console.log(`confirmation:${confirmation}`);

// 3. Entrada de dados pelo usuário
let numero = prompt("digite um número:");
console.log(`você digitou o número ${numero}`);

// Conversão da string para número inteiro
numero = parseInt(numero);

// 4. Verificação de par ou ímpar usando operador ternário
console.log(`Este número é ${número % 2 === 0 ? "par" : "ímpar"}`);
