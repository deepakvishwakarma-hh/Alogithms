//  Algorithms : The Big O -> time complexity

// take input and add through loop;

// assume n = 2
const summation = (n) => {
    let sum = 0; // executed : 1
    for (let i = 0; i <= n; i++) {
        sum += i; // executed : 2
    }
    return sum // executed : 1
}

// lineaer TC : Big(n + 2)

// formulation : ( n [paramter value as number] + 2)  => this is time complaxity


// console.log(summation(2))