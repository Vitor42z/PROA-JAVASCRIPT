var n1 = prompt("Digite o primeiro número")
var n2 = prompt("Digite o segundo número")
var n3 = prompt("Digite o terceiro número")

var maior = n1;

if(n2 > maior){
 maior = n2;
}

if(n3 > maior){
 maior = n3;
}

alert("Maior: " + maior);