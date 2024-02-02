/*

Calcola la somma e la media dei primi 10 numeri.
*/


const array = [0,1,2,3,4,5,6,7,8,9]
document.getElementById("list").innerText = `la lista dei primi 10 numeri è ${array}`

let sum = 0
for (i=0; i<array.length; i++){

    sum += array[i]
    average = sum / array.length

    document.getElementById("result").innerText = `la somma è ${sum} e la media è ${average}`
}