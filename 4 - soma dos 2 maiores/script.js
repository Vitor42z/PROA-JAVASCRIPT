var n1 = Number(prompt("Digite o primeiro valor"))
var n2 = Number(prompt("Digite o segundo valor"))
var n3 = Number(prompt("Digite o terceiro valor"))
var maior

if (n1 > n2 && n2 > n3) {
    maior = n1 + n2;
    document.write("O resultado é: " + maior);
}

else if (n2 > n1 && n3 > n1) {
    maior = n2 + n3;
    document.write("O resultado é: " + maior);
}

else if (n3 > n2 && n1 > n2) {
    maior = n3 + n1;
    document.write("O resultado é: " + maior);
}