/*
Invert values

DESCRIPTION:
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
 */


// function invert(arrays) {
//     let val = []
//     arrays.forEach(arr => {
//         if(arr >= 0){
//             val.push(Number('-'+arr))
//         } else if (arr <= 0) {
//             val.push(Math.abs(arr))
//         } else {
//             val.push([])
//         }
//     })
//     return val
// }
//
// console.log(invert([1,-2,3,-4,5]));

/*
Invert values

DESCRIPTION:
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
 */


function invert(arrays) {
    let val = []
    arrays.forEach(arr => {
        if(arr >= 0){
            val.push(Number('-'+arr))
        } else if (arr <= 0) {
            val.push(Math.abs(arr))
        } else {
            val.push([])
        }
    })
    return val
}




function invert2(arrays) {
    let results = [];
    arrays.forEach(elem => {
        results.push(elem * -1);
    });
    return results;
}

function invert3(arr) {
    let results = arr.map(value => value * -1);
    console.log(arr);
    console.log(results);
    return results;
}

function invert4(arr) {
    return arr.map(value => value * -1);
}

let invert5 = arr => arr.map(value => value * -1);




console.log(invert5([1,-2,3,-4,5]));
