// fibbonacci algo. 

// lets assume n = 3 and we need output : [0,1,1]

const Fibbinacci = (n) => {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}

// Big O : O(n)



const recursiveFibbonaacci = (n) => {
    if (n < 2) { return n } //base for break program
    return recursiveFibbonaacci(n - 1) + recursiveFibbonaacci(n - 2)
}

//Big-O(logn)

// console.log(recursiveFibbonaacci(6))



