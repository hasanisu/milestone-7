/*
1.How to declare a variable using let and const.
note: kono ekta variable er man ta change hoite pare ei rokon ahonka thake let use 
hobe, r jodi chage hobar kono ashonka na thake tahole const hobe. 
const fatherName = "Samsul";
let seasion = 'rainy';
season = 'winter';

2. 6 basic Condition: <, >, ===, !==, <=, >=
// multiple condition: && , ||
if(fatherName === 'samsul' || season === 'rainy'){

}
else if(fatherName === 'Samsul'){

}
else{

}

3. array
// index
// length, Push
const numbers = [89, 54, 95, 67]; aray declare
number[0] = 86; array change;

4.  for loop
for (i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


5. function 
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(45, 64);

6. Object
// 3 ways to access property by name
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(setuden.age) // direct by property 
console.log(student['age']) // access via property name string
console.log(student[myVariable]) // access via property name in a variable
*/