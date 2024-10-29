

function singleNumber(nums1) {
    let result = 0;
    for (let num of nums1) {
        result ^= num;
    }
    return result;
}


const nums1 = [2, 2, 1];
console.log(singleNumber(nums1)); 




function singleNumber(nums2) {
    let result = 0;
    for (let num of nums2) {
        result ^= num;
    }
    return result;
}


const nums2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums2));


function singleNumber(nums3) {
    let result = 0;
    for (let num of nums3) {
        result ^= num;
    }
    return result;
}


const nums3 = [1];
console.log(singleNumber(nums3));
