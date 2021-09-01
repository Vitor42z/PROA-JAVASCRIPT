var numeros = [];
var soma = [];

for (var i = 0; i < 4; i++) {
  numeros.push(Number(prompt("Insira um número de zero a dez")));
  if (numeros[i] > 0 && numeros[i] < 10){
    soma.push(numeros[i]);
    }
}

var media = soma.reduce((x, y) => x + y) / soma.length;

if (media > 5){
    document.write("Você passou no teste!");
}
else{
    document.write("Tente novamente!");
}