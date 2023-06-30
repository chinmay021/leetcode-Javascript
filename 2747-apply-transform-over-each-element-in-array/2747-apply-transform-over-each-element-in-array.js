/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    arr.forEach((num, index) => {
        result[index] = fn(num, index);
        // console.log(fn(num, index));
    })
    return result;
};

/* 
   // using .map()

    var map = function(arr, fn) {
        return arr.map((element, index) => fn(element, index));
    };


    //using reduce
    var map = function(arr, fn) {
        return arr.reduce((transformedArr, element, index) => {
            transformedArr[index] = fn(element, index);
            return transformedArr;
        }, []);
    };

*/