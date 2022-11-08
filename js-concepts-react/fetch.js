// 1. JSON = stringify, parse

const student = {
    name: 'salib Khan',
    age: 32, 
    movies: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studenObj = JSON.parse(studentJSON);
console.log(studenObj);
// note: 1. normal javascript k JSON.stringify kore json e convert korba
// 2. json take javascript e convert korar jonno JSON.parse use korba

// 2. fetch 
// fetch ('url')
// .then(res => res.Json())
// .then(data => console.log(data));

// keys, value 
const keys = Object.keys(student);
const values = Object.values(student);

// for
// array er moddhe loop er khetre amra forEach ta use korbo.
const numbers = [12, 54, 32, 22, 45];
numbers.forEach(num => console.log(num));
// kono ekta calculation kore kono return korte amra map use korbo
numbers.map(num=> num * 2);

// for of on array like object
// for on an object using for in 


// add or remove form an array 
const products = [
    {name: 'laptop', price:3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price:7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price:3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price:320, brand: 'ribon', color: 'black'},
    {name: 'camera', price:9000, brand: 'canon', color: 'gray'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};
// copy products array and then add newProduct
const newProducts = [...products, newProduct];


// creat a new array without one specific item
// remove phone means create a new array withou the phone
const remaining = products.filter(product =>product.name !== 'phone');
console.log(remaining);



const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;

let person =null;
console.log(person ? person : "person is null");

const obj = {a:1};
console.log(Object.keys(obj).length);