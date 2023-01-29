let num = [9 , 5, 8]
num[3] = 6
num.push(7)

console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)
console.log(num.sort())

for (var c = 1; c <= (num.length); c++) {
    console.log(num[c - 1])
}