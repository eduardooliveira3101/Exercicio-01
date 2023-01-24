let one = Number(prompt("Digite o primeiro número da operação"))
let two = Number(prompt("Digite o segundo número da operação"))

const sum = one + two
const subtraction = one - two
const multi = one * two
const div = one / two
const restDiv = one % two

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números: ${multi}`)
alert(`O resultado da divisão dos dois números é: ${div}`)
alert(`O resultado do restante da divisão dos dois números é: ${restDiv}`)
if(sum % 2 === 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
} if(one === two) {
  alert("Ambos números inseridos são iguais")
} else {alert("Bye!")}







