var num1 = Number(prompt("Digite um número"))
var num2 = Number(prompt("Digite um número"))

while(num2 <= 0){
    num2 = Number(prompt("Digite um número que não seja zero"))
}

document.write("O resultado da divisão é: " + num1 / num2)