//variavéis
let nomeDoHeroi = "Porto"
let exp = 99999

//mensagem de abertura
console.log("Seja bem vindo!!! " + nomeDoHeroi)
console.log("2500")

/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 6.000 = Ouro
Se XP for entre 6.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante*/
if (exp <= 1000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Ferro")
}else if (exp <= 2000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Bronze")
}else if (exp <= 5000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Prata")
}else if (exp <= 6000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Ouro")
}else if (exp <= 8000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Platina")
}else if (exp <= 9000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Ascendente")
}else if (exp <= 10000){
  console.log("O Herói de nome " + nomeDoHeroi + 
    " está no nível de Imortal")
}else{
  console.log("O Herói de nome " + nomeDoHeroi + 
  " está no nível de Radiante") 
}