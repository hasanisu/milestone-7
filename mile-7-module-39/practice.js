// 1.
// const hello = [];
// if ([] == true){
//     console.log('its truthy')
// }
// else{

//     console.log('its falsy');
// }

// 2.
// const x = true;
// const y  = "true";
// if(x === y){
//     console.log('its truthy');
// }
// else{
//     console.log('its falsy')
// }

// 3.
// const isArrow = numbers =>{
//   if(Number.isNaN(numbers)){
//     return true;
//   }
//   return false;
  
// }

// const num = isArrow(5);
// console.log(num)

// p-2-1
let storeFalsyValue = true;
if(!storeFalsyValue){
    console.log('Nothing to show')
}
else{
    console.log('You are amaxing')
}

const numbers = (num1, num2, num3) => {
    if( num3 == 'add'){
        console.log('Print', num1 + num2)
    }
    else if (num3 == 'substrac'){
        console.log('Print', num1 - num2)
    }
    else if (num3 == 'multiplay'){
        console.log(num1 * num2)
    }
    else if (num3 == 'divide'){
        console.log(num1 / num2)
    }
    else if (num3 == 'modulus'){
        console.log(num1 % num2)
    }
    else{
        console.log('Invalid operation')
    }
}
const result = numbers(6 , 2 , 5);
console.log(result);

let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}

function sum(p, q) {
    p + q;
   }
   const results = sum(2, 3);
   console.log(results);


   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);