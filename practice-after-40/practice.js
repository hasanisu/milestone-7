/*
JS Concepts
1. null vs undefind
2. == vs ===
3. scope: block, function , global
4. closure
5. hoisting 
6. callback function
7. arrguments. what is array like object
8. array vs array like object
9. truthy va falsy 
10. ! vs !!
*/

/*
Dev tool

1. Elements tab
2. console tab 
3. source
4. network
5. Application 
6. check responsive 
7. shortcut keys 
*/

let str = "";
// if(!!str){
//     console.log('truthy')
// }
// else{
//     console.log('falsy')
// }

const marks= 60;
const resubmit = -5; 
// console.log(!(marks > 0 || resubmit > 0));

const person = {name: "hero", id: 101, address: "BD",postalCode: 40321};

// How will you find out the numbers of properties present in an object person?
console.log(Object.keys(person).length);

const animals = ['cat', 'dog', 'rat'];
// console.log(animals.includes('Cat'));

const unique =array => array.indexOf(21)

const result2 = unique[2,3,4,5,2];
console.log(result2)

const add =(para1 , para2) => para2 + para1;
const result =add('2', 3);
console.log(result);

// const b=6 , b=6
// console.log(b);

const colors  = {mango: 'green', grapes: 'black', organe: 'yellow'};
console.log(colors[grapes]);
