//1. template string 
const numbers = [45, 87, 95, 21];
const student = {
    name: 'salib Khan',
    age: 32, 
    movies: ['king khan', 'Dhakar Mastan']
}
const about = `My name is ${student.name} age of ${student.age} has ranking number ${numbers[3]}`;
const action = `this is the best movie ${student.movies[1]} in the world`;
console.log(action);
console.log(about);

//2. Arrow function 
const getFiftyFive = ()=>55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (num1, num2, num3)=> num1 + num2 + num3;
const doMath = (num1, num2)=>{
    const sum = num1 + num2;
    return sum;
}

// 3. Spread operator
const newNumber = [...numbers];

// creat a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumber);
console.log(currentNumbers);
