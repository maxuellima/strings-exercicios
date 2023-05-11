const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const fraseNova = frase.replace("verde", "rosa").replace("azul","laranja")
const verificaFrase = fraseNova.includes("verde" || "laranja")
const fraseMaiuscula = fraseNova.replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(fraseNova)
console.log(verificaFrase)
console.log(fraseMaiuscula)