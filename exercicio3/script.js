const phrase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const newPhrase = phrase.replace("verde", "rosa").replace("azul","laranja")
const checkPhrase = newPhrase.includes("verde" && "laranja")
const upperPhrase = "mas não deixe o gato sair"
const upperCasePhrase = newPhrase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(newPhrase)
console.log(checkPhrase)
console.log(upperCasePhrase)