
const Factorial = (n) => {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum = sum * i
    }
    return sum
}

//Big-O(n) : n + 2

// console.log(Factorial(5))


const recFactorial = (n) => {
    if (n < 2) { return n } // base to break program
    return n * recFactorial(n - 1)
}

console.log(recFactorial(5))

