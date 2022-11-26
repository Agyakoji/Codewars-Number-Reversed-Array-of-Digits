// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

                    // SOLUTION
// DEclare a function taking an integer
function reverseNum(num){
    // Convert the int to a numeric string
    // split the string
    // convert the string to number
    // Reverse the number
    return num.toString().split('').map(Number).reverse()
}
alert(reverseNum(34))

// function reversedDigitizedArray(num){
//     return String(num).split('').map(Number).reverse()
// }
// console.log(reversedDigitizedArray(48))

