let array = [10,9,8,7,6];

// [10,9,8,6,7]
// [10,9,6,8,7]
// [10,6,9,8,7]
// [6,10,9,8,7]
// [6,10,9,7,8]
// [6,10,7,9,8]
// [6,7,10,9,8]
// [6,7,10,8,9]
// [6,7,8,10,9]
// [6,7,8,9,10]
function selectionSort(newArray){
    let iterations = 0;
    array = newArray || array;
    for(let i=0;i<array.length-1;i++){
        let min_index = i;
        for(let j=i+1;j<array.length;j++){
            iterations++;
            if(array[min_index]>array[j]){
                min_index = j;
            }
        }
        let temp = array[i];
        array[i] = array[min_index];
        array[min_index] = temp;
    }
    console.log(`iterations ${iterations}`);
    return array;
}

/* Above selectionSort is better than selectionSort2 since in that we only need to do O(n) swaps whereas in this we do O(n^2) swaps which
    is inefficient for memory write process */
function selectionSort2(newArray){
    let iterations = 0;
    array = newArray || array;
    for(let i=0;i<array.length;i++){
        for(let j=array.length-1;j>i;j--){
            iterations++;
            if(array[j-1]>array[j]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    console.log(`iterations ${iterations}`);
    return array;
}