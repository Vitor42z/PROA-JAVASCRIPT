var n1 = Number(prompt("Digite sua 1° nota: "));
var n2 = Number(prompt("Digite sua 2° nota: "));

var media = (n1 + n2) / 2;

if (media >= 7){
    document.write("Você foi aprovado, sua média é :" + media);
}
else{
    document.write("Você foi reprovado, sua média é :" + media);
}