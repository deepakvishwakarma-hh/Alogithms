

// function : return index of targeted item
const LinearSearch = (arr, target) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }

    return i

}

// Big O =  O(n) [linear ]

// console.log(
//     LinearSearch([1, 8, 4, -2, 6], 6)
// )
