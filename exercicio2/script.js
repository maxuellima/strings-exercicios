const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remover os espaços
const semEspacos = minhaString.trim()

//b) Qtde de caracteres antes e depois
const tamanhoDepois = `A quantidade de caracteres após remover os espaços é de ${semEspacos.length}`
const tamanhoAntes = `A quantidade de caracteres antes de remover os espaços é de ${minhaString.length}`

//c)Substituindo o _______ por "sticioso"
const novaFrase = semEspacos.replace("________", "sticioso")

console.log(semEspacos)
console.log(tamanhoDepois)
console.log(tamanhoAntes)
console.log(novaFrase)


