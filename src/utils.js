const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
        }
    }
    return results;
}

const timesToAppear = (arr, value) => {
    let count = 0;
    if (arr.includes(value)) {
        if (arr.find(a => a === value)) count++;
    }

    return count;
}

export {
    findDuplicates,
    timesToAppear,
};
