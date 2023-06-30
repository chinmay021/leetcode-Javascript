/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
/*  using recursion
var compose = function(functions){
    return function(x) {

        if(!functions.length) return x; // if we reached the end of recursion i.e no more functions left

        let result = functions[functions.length - 1](x); // call the last function with value x;

        return compose(functions.slice(0,-1))(result); 
        // call the compose function by removing the last function from the arguments array
        // and for the x value pass it the result

    }
}

 */