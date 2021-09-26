/*Jogo pedra, papel e tesoura
As regras do jogo são:
1- tesoura corta papel;
2- papel cobre veneno;
3- pedra esmaga lagarto;
4- lagarto corta Spock;
5- Spock vaporiza tesoura;
6- tesoura decapita Spock;
7- lagarto come papel;
8- veneno refuta lagarto;
9- Spock vaporiza pedra;
10- veneno esmaga tesoura.
O desafio vai ser fazer aplicar os métodos de strings nas regras do jogo. E exibir no console a regra e a alteração realizada.
a) Onde tem esmaga trocar por quebra.
b) Onde tem lagarto trocar por tesoura.
c) Onde tem Spock trocar por papel.
d) Onde tem vaporiza trocar por embrulha.
e) Onde tem cobre trocar por embrulha.
f) Onde tem decapita trocar por corta.
g) Onde tem come trocar por corta.
h) Onde tem veneno trocar por pedra.
i) Onde tem refuta trocar por quebra.
*/

var jogo = "tesoura corta papel, papel cobre veneno, pedra esmaga lagarto, lagarto corta Spock, Spock vaporiza tesoura, tesoura decapita Spock, lagarto come papel, veneno refuta lagarto, Spock vaporiza pedra, veneno esmaga tesoura."
console.log (jogo);
jogo = jogo.replace (esmaga/gi, "quebra")
 jogo = jogo.replace (lagarto/gi, "tesoura")
 jogo = jogo.replace (Spock/gi, "papel")
 jogo = jogo.replace (vaporiza/gi, "embrulha")
 jogo= jogo.replace (cobre/gi, "embrulha")
 jogo = jogo.replace (decapita/gi,"corta")
 jogo = jogo.replace (come/gi, "corta")
 jogo = jogo.replace (veneno/gi, "pedra")
 jogo = jogo.replace (refuta/gi, "quebra")
 console.log (jogo);var jogo = "tesoura corta papel, papel cobre veneno, pedra esmaga lagarto, lagarto corta Spock, Spock vaporiza tesoura, tesoura decapita Spock, lagarto come papel, veneno refuta lagarto, Spock vaporiza pedra, veneno esmaga tesoura."
 console.log (jogo);
 jogo = jogo.replace (esmaga/gi, "quebra")
  jogo = jogo.replace (lagarto/gi, "tesoura")
  jogo = jogo.replace (Spock/gi, "papel")
  jogo = jogo.replace (vaporiza/gi, "embrulha")
  jogo= jogo.replace (cobre/gi, "embrulha")
  jogo = jogo.replace (decapita/gi,"corta")
  jogo = jogo.replace (come/gi, "corta")
  jogo = jogo.replace (veneno/gi, "pedra")
  jogo = jogo.replace (refuta/gi, "quebra")
  console.log (jogo);