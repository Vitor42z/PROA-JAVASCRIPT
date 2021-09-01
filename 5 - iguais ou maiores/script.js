var num1 = Number(prompt("Informe o primeiro número"));
var num2 = Number(prompt("Informe o segundo número"));

if (num1 == num2) {
    document.write("Os números são iguais");
}

else if (num1 > num2) {
    document.write("O primeiro número é maior");
}

else{
    document.write("O Segundo número é maior");
}