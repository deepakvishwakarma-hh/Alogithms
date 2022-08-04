/* Important note :  Binary search need sorted arrey */

const binary = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while (left <= right) {

        middle = Math.floor((left + right) / 2)

        if (arr[middle] === target) {
            return middle
        }

        if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1

}

// Big O : O(logn)





function recBinary(arr, target, left = 0, right = arr.length - 1) {

    const middle = Math.floor((left + right) / 2)

    // not found base case
    if (left > right) {
        return -1
    }

    // found base case 
    if (arr[middle] === target) {
        return middle
    }

    // target is lesser than middle
    if (target < arr[middle]) {
        return recBinary(arr, target, left, middle - 1)
    } else {
        return recBinary(arr, target, middle + 1, right)
    }


}


console.log(recBinary([1, 3, 5, 7, 8, 9, 12], 5))