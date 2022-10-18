/*

8 ways of get undefine
1. variable that is not initialized will give undifined.
2. function with no return.
3. parameter that is not passed will be undefined. 
4. is return has nothing on the right side will return undefined.
5. poperty that does not exists on an object will give you underfined.
6. accessing array elements outside of the index range.
7. delteing an element inside an array.　
8. set a value directly to undefined
*/

let first; /* 1 */
// console.log(first);
function second (a, b){ /* 2 */
    const total = a + b;
}
const result = second();
// console.log(result);

function third(a, b, c, d){ /* 3 */
    const total = a + b + c+ d;
    // console.log(a, b, c, d);
}
third(2, 5);


function noNegative (a, b){ /* 4 */
    if(a < 0  || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2,-5);
// console.log(total); 


const fifth = {id: 2, name: 'ponchak', age: 40}; /* 5 */
// console.log(fifth.age, fifth.salary);


const sixth = [4, 58, 49, 67, 1]; /* 6 */
// console.log(sixth[1], sixth[5], sixth[200]);

// you should not do it. instead use splice
delete sixth[1];


const eight = undefined;/* 8 */

const ninth = null;
const data ={result: [], update: null}

console.log(typeof undefined);
console.log(typeof null)
