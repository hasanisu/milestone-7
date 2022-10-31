// 'almas', 5, true, {}, [] truthy
// '', 0, false, null, undefind, 

let myVar = 5; 
// check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything 
if(!myMoney){
    
}
const money = 800;
let food;
if(money > 100){
    food = 'biryani'
}
else{
    food = 'cha biscut'
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscut';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// shortcut number to string conversion.
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
let isActive = true;
const showUser = ()=> console.log('display User');
const hideUser = ()=> console.log('hide User');
// isActive ? showUser() : hideUser(); /* true and false check kora */
// use && if the left side is true then right side will be executed 
isActive && showUser();
//  use || if the left side is false then rifht side will be executed
isActive || showUser();

// toggle boolean
isActive = !isActive;