
// compare i and i + 1 untilll every item sorted

// sorting ascending

const bubble = (arr) => {

    let sorted;

    do {
        sorted = false

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                //let's swap

                let temp = arr[i]

                arr[i] = arr[i + 1]
                arr[i + 1] = temp

                sorted = true

            }
        }

    } while (sorted)

    return arr

}
// console.log(bubble([-2, 9, 3, 6, -9, 8]))


// recursively 

const quick = (arr) => {

    // base-case  
    if (arr.length < 2) return arr

    const pivot = arr[arr.length - 1],
        leftArr = [],
        rightArr = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot > arr[i]) {
            leftArr.push(arr[i])
        } else { rightArr.push(arr[i]) }
    }

    return [...quick(leftArr), pivot, ...quick(rightArr)]

}
// console.log(quick([-2, 9, 3, 6, -9, 8]))

// Big O : O(logn)

const arr = [-2, 9, 3, 6, -9, 8]

console.log(arr.sort())