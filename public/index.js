
function getMaxSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let value of arr) {
        sum = sum < 0 ? 0 : sum;
        sum = sum + value;
        maxSum = maxSum > sum ? maxSum : sum;
    }
}

function getEqualSumPair(arr) {
    let pairsObj = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                let sum = arr[i] + arr[j];
                if (!Object.keys(pairsObj).includes(`sum_${sum}`)) {
                    pairsObj[`sum_${sum}`] = [[arr[i], arr[j]]]
                } else {
                    let isAlreadyThere = false;
                    for (let pair of pairsObj[`sum_${sum}`]) {
                        isAlreadyThere = pair.includes(arr[i]);
                        if (isAlreadyThere)
                            break;
                    }
                    if (!isAlreadyThere)
                        pairsObj[`sum_${sum}`].push([arr[i], arr[j]]);
                }
            }
        }
    }
    return pairsObj;
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// function lowestPositiveInteger(arr){
//     let lowestInt = 1;
//     let dummyArray = [];
//     for(let value of arr){
//         if(value>0){
//             dummyArray[value-1] = value;
//         }
//         if()
//     }
// }