/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   let result =[];

   arr.forEach( (element, index) =>{
       if(fn(element, index)){
           result.push(element);
       }
   })
   return result;
};


/*  
    //with filter

    return arr.filter((ele, index) => fn(ele, index));

 */