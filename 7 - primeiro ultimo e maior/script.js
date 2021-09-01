var numeros = [];

for (var i = 0; i < 4; i++) {
  numeros.push(Number(prompt("Insira um número")));
}

document.write("O primeiro número é: " + numeros[0] + "<br>");
document.write("O ultimo número é: " + numeros[numeros.length - 1] + "<br>");
document.write("O maior número é: " + Math.max.apply(Math, numeros));