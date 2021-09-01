var numeros = [];

for (var i = 0; i < 10; i++) {
  numeros.push(Number(prompt("Insira um número")));
}

var soma = numeros.reduce((x, y) => x + y);

document.write("A Média aritimética é: " + (soma / 10));