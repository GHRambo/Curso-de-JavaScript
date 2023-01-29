let num = [9 , 5, 8]
num[3] = 6
num.push(7)

console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)
console.log(num.sort())
0
for (var c = 0; c <= num.length; c++) {
    console.log(num[c])
}

for ( var c in num){
    console.log(num[c])
}

console.log(`O valor 7 se encontra na posição número ${num.indexOf(7)}`)
console.log(num.indexOf(11))// Quando não encontra o valor o JS retorna -1