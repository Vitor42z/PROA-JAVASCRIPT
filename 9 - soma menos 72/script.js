var numeros = [];
var soma = [];

for (var i = 0; i < 6; i++) {
  numeros.push(Number(prompt("Insira um número")));
  if (numeros[i] < 72){
    soma.push(numeros[i]);
    }
}

var resultado = document.write("O resultado da soma dos números menores que 72 é: " + soma.reduce((x, y) => x + y));
