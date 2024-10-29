//Crie uma variável para armazenar o nome e a quantidade de experiência(XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP
//for menor do que 1.000 = Ferro
//Se XP
//for entre 1.001 e 2.000 = Bronze
//Se XP
//for entre 2.001 e 5.000 = Prata
//Se XP
//for entre 5.001 e 7.000 = Ouro
//Se XP
//for entre 7.001 e 8.000 = Platina
//Se XP
// entre 8.001 e 9.000 = Ascendente
//Se XP
//for entre 9.001 e 10.000 = Imortal
//Se XP
//for maior ou igual a 10.001 = Radiante


var nome = "Richard";
var nivel = 1000;

if (nivel < 1000) {
    console.log("O Herói de nome " + nome + " está no nível de Ferro");
} else if (nivel >= 1001 && nivel <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível de Bronze");
} else if (nivel >= 2001 && nivel <= 5000) {
    console.log("O Herói de nome " + nome + " está no nível de Prata");
} else if (nivel >= 5001 && nivel <= 7000) {
    console.log("O Herói de nome " + nome + " está no nível de Ouro");
} else if (nivel >= 7001 && nivel <= 8000) {
    console.log("O Herói de nome " + nome + " está no nível de Platina");
} else if (nivel >= 8001 && nivel <= 9000) {
    console.log("O Herói de nome " + nome + " está no nível de Ascendente");
} else if (nivel >= 9001 && nivel <= 10000) {
    console.log("O Herói de nome " + nome + " está no nível de Imortal");
} else if (nivel >= 10001) {
    console.log("O Herói de nome " + nome + " está no nível de Radiante");
}